import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  background-color: #000000;
}
`

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta key="charset" name="charset" content="utf-8" />
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, minimum-scale=5"
        />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:type" content="website" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
