import Head from 'next/head';
import Layout from '../components/Layout';

export default function Checkout() {
  return (
    <Layout>
      <Head>
        <title>Checkout</title>
        <meta name="checkout" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Layout>
  );
}
