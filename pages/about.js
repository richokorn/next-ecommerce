import Head from 'next/head';
import Layout from '../components/Layout';
import { cookieChecker } from '../util/cartFunctions';

export default function About(props) {
  cookieChecker();

  return (
    <Layout cartCount={props.cartCount}>
      <Head>
        <title>About</title>
        <meta name="about" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Layout>
  );
}
