import Head from 'next/head'
import HomePage from '../components/HomePage/HomePage'

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh Food</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  )
}
