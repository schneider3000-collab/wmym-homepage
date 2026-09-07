import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { patchContent } from './content-ast.mjs';

const LOCALES = new Set(['de', 'en']);
const SAFE_PATH = /^[A-Za-z0-9_]+(\.[A-Za-z0-9_]+)*$/;

/**
 * Dev-only endpoint behind the in-place copy editor. Accepts a locale, a key path
 * and a new value, and rewrites the matching string literal in src/content/<locale>.ts.
 * Never registered for `vite build`, so nothing reaches production.
 */
export function copyEditor() {
  return {
    name: 'wmym-copy-editor',
    apply: 'serve',
    configureServer(server) {
      const contentDir = path.resolve(server.config.root, 'src/content');

      server.middlewares.use('/__copy', (req, res, next) => {
        if (req.method !== 'POST') return next();

        let body = '';
        req.on('data', (chunk) => {
          body += chunk;
          if (body.length > 100_000) req.destroy();
        });

        req.on('end', async () => {
          const send = (status, payload) => {
            res.statusCode = status;
            res.setHeader('content-type', 'application/json');
            res.end(JSON.stringify(payload));
          };

          try {
            const { locale, path: keyPath, value } = JSON.parse(body);

            if (!LOCALES.has(locale)) return send(400, { error: 'unknown locale' });
            if (typeof keyPath !== 'string' || !SAFE_PATH.test(keyPath)) {
              return send(400, { error: 'invalid key path' });
            }
            if (typeof value !== 'string') return send(400, { error: 'value must be a string' });

            const file = path.join(contentDir, `${locale}.ts`);
            const source = await readFile(file, 'utf8');
            const patched = patchContent(source, keyPath, value);

            if (patched !== source) await writeFile(file, patched, 'utf8');
            server.config.logger.info(`  copy  ${locale}.ts › ${keyPath}`, { timestamp: true });
            send(200, { ok: true });
          } catch (error) {
            send(400, { error: error.message });
          }
        });
      });
    },
  };
}
