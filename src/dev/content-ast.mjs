import ts from 'typescript';

/** Reads an object-literal key name, whether written bare or quoted. */
function keyName(name) {
  if (ts.isIdentifier(name)) return name.text;
  if (ts.isStringLiteral(name)) return name.text;
  return null;
}

/** Finds the object literal assigned by `export const <x> = {…}` / `= {…} as T`. */
function findRoot(sourceFile) {
  for (const statement of sourceFile.statements) {
    if (!ts.isVariableStatement(statement)) continue;
    for (const decl of statement.declarationList.declarations) {
      let init = decl.initializer;
      while (init && (ts.isAsExpression(init) || ts.isParenthesizedExpression(init))) {
        init = init.expression;
      }
      if (init && ts.isObjectLiteralExpression(init)) return init;
    }
  }
  return null;
}

/** Re-quotes a value for TypeScript source, picking the quote style that escapes least. */
function quote(value) {
  const body = value.replace(/\\/g, '\\\\').replace(/\r?\n/g, '\\n');
  if (!body.includes("'")) return `'${body}'`;
  if (!body.includes('"')) return `"${body}"`;
  return `'${body.replace(/'/g, "\\'")}'`;
}

/**
 * Replaces the string literal at `path` (e.g. `offerings.faq.2.a`) inside a content
 * module, returning the new source. Uses the TypeScript AST rather than a regex
 * because key names like `headline` repeat in every page object.
 */
export function patchContent(source, path, value) {
  const sourceFile = ts.createSourceFile('content.ts', source, ts.ScriptTarget.Latest, true);
  let node = findRoot(sourceFile);
  if (!node) throw new Error('no exported object literal found');

  for (const segment of path.split('.')) {
    if (ts.isObjectLiteralExpression(node)) {
      const prop = node.properties.find(
        (p) => ts.isPropertyAssignment(p) && keyName(p.name) === segment,
      );
      if (!prop) throw new Error(`key not found: ${segment} (in ${path})`);
      node = prop.initializer;
    } else if (ts.isArrayLiteralExpression(node)) {
      const element = node.elements[Number(segment)];
      if (!element) throw new Error(`index out of range: ${segment} (in ${path})`);
      node = element;
    } else {
      throw new Error(`cannot descend into ${segment} (in ${path})`);
    }
  }

  if (!ts.isStringLiteral(node) && !ts.isNoSubstitutionTemplateLiteral(node)) {
    throw new Error(`target at ${path} is not a string literal`);
  }

  return source.slice(0, node.getStart(sourceFile)) + quote(value) + source.slice(node.getEnd());
}

/**
 * Flattens a content module to `{ 'a.b.0.c': 'value' }` by reading the AST rather than
 * importing it, so it can be run against arbitrary git blobs (a previous commit, the
 * staged index) without executing anything.
 */
export function extractStrings(source) {
  const sourceFile = ts.createSourceFile('content.ts', source, ts.ScriptTarget.Latest, true);
  const root = findRoot(sourceFile);
  if (!root) throw new Error('no exported object literal found');

  const out = {};
  const walk = (node, prefix) => {
    if (ts.isObjectLiteralExpression(node)) {
      for (const prop of node.properties) {
        if (!ts.isPropertyAssignment(prop)) continue;
        const name = keyName(prop.name);
        if (name === null) continue;
        walk(prop.initializer, prefix ? `${prefix}.${name}` : name);
      }
    } else if (ts.isArrayLiteralExpression(node)) {
      node.elements.forEach((element, i) => walk(element, `${prefix}.${i}`));
    } else if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
      out[prefix] = node.text;
    }
  };
  walk(root, '');
  return out;
}
