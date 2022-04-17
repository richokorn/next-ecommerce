import Head from 'next/head';
import Layout from '../components/Layout';
import {
  h1Intro,
  heroDividerContentColumn,
  heroDividerWrapper,
  pIntro,
} from '../components/styles';

export default function Home(props) {
  return (
    <Layout cartCount={props.cartCount}>
      <Head>
        <title>UpMerched</title>
        <meta name="UpMerched" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div css={heroDividerWrapper}>
          <div css={heroDividerContentColumn}>
            <div css={h1Intro}>
              <h1>Need some merch?</h1>
              <h1>Gotcha fam.</h1>
            </div>
            <div css={pIntro}>
              <p>
                UpMerched offers a wonderful selection of cool little products.
              </p>
              <br />
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </p>
            </div>
          </div>
          <div css={heroDividerContentColumn}>
            <img src="/img/stickers.jpg" alt="" />
          </div>
        </div>
      </main>
    </Layout>
  );
}
