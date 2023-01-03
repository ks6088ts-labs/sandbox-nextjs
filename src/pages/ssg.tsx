import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

type SSGProps = {
  message: string
}

const SSG: NextPage<SSGProps> = (props) => {
  const { message } = props
  return (
    <div>
      <Head>
        <title>Static Site Generation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>This page is using Static Site Generation</p>
        <p>{message}</p>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps<SSGProps> = async () => {
  const timestamp = new Date().toLocaleString()
  const message = `run getStaticProps at ${timestamp}`
  console.log(message)
  return {
    props: {
      message,
    },
  }
}

export default SSG
