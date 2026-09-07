import type { APIRoute } from 'astro';

// A non-root base means this build is the github.io preview, not the real domain.
const isPreview = import.meta.env.BASE_URL !== '/';

const live = `# whatmakesyoumove.org
# Crawling and quoting is explicitly welcome, including by AI search systems.
# The FAQ blocks on each page carry FAQPage structured data for exactly that purpose.

User-agent: *
Allow: /

# Legal boilerplate is excluded from the sitemap; no need to index it either.
Disallow: /impressum
Disallow: /datenschutz
Disallow: /en/imprint
Disallow: /en/privacy

Sitemap: https://whatmakesyoumove.org/sitemap-index.xml
`;

const preview = `# Preview build — not the published site.
# Keeps the staging URL out of search results while the content is still
# provisional. Reverts to the permissive version automatically once the site
# builds for its own domain (no BASE_PATH).

User-agent: *
Disallow: /
`;

export const GET: APIRoute = () =>
  new Response(isPreview ? preview : live, {
    headers: { 'content-type': 'text/plain; charset=utf-8' },
  });
