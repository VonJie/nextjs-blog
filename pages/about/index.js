export default function Home() {
  return 1
}

export async function getStaticProps(context) {
  return {
    redirect: {
      destination: '/posts/ssg-ssr',
      permanent: true // triggers 308
    }
  }
}