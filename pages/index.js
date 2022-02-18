import Head from 'next/head'
import Link from 'next/link'
import Alert from '../components/alert'
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout/'
import { getAllApiIds, getSortedPostsData } from '../lib/posts'
import utilStyles from '../styles/utils.module.css'

export default function Home({ allPostsData, apiIds }) {
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
      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              {id}
              <br />
              <Date dateString={date} />
            </li>
          ))}
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Api</h2>
        <ul className={utilStyles.list}>
          {apiIds.map(({ id }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/api/${id}`}>{id}</Link>
            </li>
          ))}
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Url Redirect</h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            <Link href={`/about`}>About</Link>
          </li>
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() { // getServerSideProps
  const allPostsData = getSortedPostsData();
  const apiIds = getAllApiIds();
  return {
    props: {
      allPostsData,
      apiIds
    }
  }
}