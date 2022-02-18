import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <title>TestForms</title>
      <link rel="icon" type="image/x-icon" href="favicon.svg"></link>
    </Head>
    <Header />
    <div className='min-h-screen bg-gray-900'>
      <Component {...pageProps} />
    </div>
   </>
  )
}

export default MyApp
