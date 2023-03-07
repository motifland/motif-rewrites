import Link from 'next/link'

export default function Home() {
  return (
    <>
      <main>
        <p>With internal rewrites in external app</p>
        <p>
          <Link href="/docs-gsp/page1">With getStaticProps</Link>
        </p>
        <p>
          <Link href="/docs-nogsp/page1">Without getStaticProps</Link>
        </p>
        <p>Without internal rewrites in external app</p>
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
