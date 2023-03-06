import { NextRequest, NextResponse } from 'next/server'

const MOTIF_PROJECT_URL = 'https://motif-rewrites-docs.vercel.app'
// const MOTIF_PROJECT_URL = 'http://localhost:3001'

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (pathname.startsWith('/docs')) {
    // Rewrite /docs... to external.
    return NextResponse.rewrite(MOTIF_PROJECT_URL + pathname)
  } else if (pathname.startsWith('/__motif/assets/_next/')) {
    // Any assets coming in from external have path
    // /__motif/assets/_next/... as per "assetPrefix", so
    // rewrite accordingly.
    return NextResponse.rewrite(MOTIF_PROJECT_URL + pathname)
  } else if (pathname.startsWith('/_next/data/')) {
    // Rewrite /_next/data/<buildId>/docs... to external.
    const match = pathname.match(/^\/_next\/data\/(.*)(\/docs.*)$/)
    const buildId = match?.[1]
    const slug = match?.[2]
    if (buildId && slug) {
      return NextResponse.rewrite(
        `${MOTIF_PROJECT_URL}/_next/data/${buildId}${slug}`
      )
    }
  }

  return NextResponse.next()
}
