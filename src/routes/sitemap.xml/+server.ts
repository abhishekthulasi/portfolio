export const prerender = true;

export async function GET() {
    const site = 'https://abhishekthulasi.com';

    // List your static pages here. 
    // Since you only have the home page right now, this list is correct.
    const pages = [
        '',
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xhtml="https://www.w3.org/1999/xhtml"
      xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
    >
      ${pages
            .map(
                (page) => `
      <url>
        <loc>${site}${page}</loc>
        <changefreq>weekly</changefreq>
        <priority>${page === '' ? 1.0 : 0.7}</priority>
      </url>
      `
            )
            .join('')}
    </urlset>`;

    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}