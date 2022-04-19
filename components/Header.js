import Link from 'next/link';
import { headerLeft, headerRight, headerWrapper } from './styles';

export default function Header(props) {
  return (
    <header>
      <div css={headerWrapper}>
        <div style={{ height: '2em', width: '0px' }} />
        <div css={headerLeft}>
          <Link href="/">
            <a>
              <img src="/img/logo.png" alt="" />
              <p>merched</p>
            </a>
          </Link>
        </div>
        <div css={headerRight}>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/products">
            <a>Merch</a>
          </Link>
          {/* <Link href="https://upleveled.io/#courses">
            <a>Courses</a>
          </Link>
          <Link href="https://upleveled.io/graduates">
            <a>Graduates</a>
          </Link>
          <Link href="https://www.eventbrite.at/o/upleveled-30041446326">
            <a>Events</a>
          </Link>
          <Link href="https://upleveled.io/for-employers">
            <a>For Employers</a>
          </Link> */}
          {/* <button
            onClick={() => {
              Cookies.remove('cart');
            }}
          >
            Delete Cookies
          </button> */}
          <Link href="/checkout">
            <a>
              <img src="/img/cart.png" alt="" />
              <div className="cartCount">{props.cartCount}</div>
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}
