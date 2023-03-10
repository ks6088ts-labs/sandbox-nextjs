import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'

type SSRProps = {
  message: string
}

const SSR: NextPage<SSRProps> = (props) => {
  const { message } = props
  return (
    <div>
      <Head>
        <title>Server Side Rendering</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>This page is using Server Side Rendering</p>
        <p>{message}</p>
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<SSRProps> = async () => {
  const timestamp = new Date().toLocaleString()
  const message = `run getStaticProps at ${timestamp}`
  console.log(message)
  return {
    props: {
      message,
    },
  }
}

export default SSR
