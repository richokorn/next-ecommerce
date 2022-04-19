import Cookies from 'js-cookie';
import Head from 'next/head';
import Header from './Header';
import { mainStyle } from './styles';

export default function Layout(props) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header cartCount={props.cartCount} />
      <main css={mainStyle}>{props.children}</main>
    </div>
  );
}
