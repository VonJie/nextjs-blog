import Head from 'next/head'
import Link from 'next/link'
import Alert from '../components/alert'
import Layout, { siteTitle } from '../components/layout/'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Alert type="success">it's success!</Alert>
      <Alert type="error">it's error!</Alert>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm 木纹. I'm a software enginer and a translator(中文/English)</p>
        <Link href="/posts/first-post">go to first post</Link>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}