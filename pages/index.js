import Head from 'next/head'
import Footer from '../components/Footer/Footer'
import HomePage from '../components/HomePage/HomePage'

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
      <HomePage product={product} />
      <Footer />
    </>
  )
}
