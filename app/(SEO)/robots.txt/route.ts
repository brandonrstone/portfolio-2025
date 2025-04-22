// app/robots.txt/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  const domain = 'https://brandonstonedev.vercel.app'

  const content = `
    User-agent: *
    Allow: /

    Sitemap: ${domain}/sitemap.xml
  `.trim()

  return new NextResponse(content, { headers: { 'Content-Type': 'text/plain' } })
}
