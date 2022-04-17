import Head from 'next/head';
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About</title>
        <meta name="about" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Layout>
  );
}
