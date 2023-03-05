import Link from 'next/link'

export default function Home() {
  return (
    <>
      <main>
        <p>Rewrites tests</p>
        <p>
          <Link href="/docs-gsp/page1">With getStaticProps</Link>
        </p>
        <p>
          <Link href="/docs-nogsp/page1">Without getStaticProps</Link>
        </p>
      </main>
    </>
  )
}
