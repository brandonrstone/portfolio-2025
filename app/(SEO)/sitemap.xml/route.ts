import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://brandonstonedev.vercel.app'

  const portfolioItems = ['Chat App', 'Moonwell.fi', 'Diablo II Stat Checker', 'NFT Marketplace']

  // Map portfolio items to routes
  const routes = portfolioItems.map(slug => `/portfolio/${encodeURIComponent(slug)}`)

  // Include static routes
  const staticRoutes = ['', '/about', '/experience', '/portfolio', '/contact']
  const allRoutes = [...staticRoutes, ...routes]

  // Build the sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allRoutes.map(route => `
        <url>
          <loc>${baseUrl}${route}</loc>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>
        `).join('')}
    </urlset>
  `

  return new NextResponse(sitemap, { headers: { 'Content-Type': 'application/xml' } })
}
