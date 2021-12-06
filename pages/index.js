import Head from 'next/head'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import HomePage from '../components/HomePage/HomePage'
import MobileHeader from '../components/MobileHeader/MobileHeader'

// export const getStaticProps = async () => {
//   const res = await fetch("https://fakestoreapi.com/products");
//   const data = await res.json(); 
//   return{
//     props: {product: data}
//   }
// }

export default function Home({product}) {
  return (
    <>
      <Head>
        <title>Fresh Food</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MobileHeader />
      <Header />
      <HomePage product={product} />
      <Footer />
    </>
  )
}
