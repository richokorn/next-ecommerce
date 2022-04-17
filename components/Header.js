import Cookies from 'js-cookie';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { headerLeft, headerRight, headerWrapper } from './styles';

export default function Header() {
  // The cart cookie is an object with the following structure:
  // {
  //   item1: 1,
  //   item2: 2,
  //   item3: 5,
  // }
  // The cartCount is the sum of the values of the cart cookie.
  const exampleCart = {
    item1: 1,
    item2: 5,
    item3: 10,
  };

  Cookies.set('cart', JSON.stringify(exampleCart), {
    SameSite: 'lax',
    secure: true,
    expires: 1,
  });

  const [cartCount, setCartCount] = useState(0);
  const cartCookie = Cookies.get('cart');
  console.log('cartCookie', cartCookie);

  useEffect(() => {
    if (cartCookie) {
      const totals = Object.values(JSON.parse(cartCookie)).reduce(
        (acc, val) => acc + val,
        0,
      );
      setCartCount(totals);
      console.log('totals', totals);
    }
  }, [cartCookie]);

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
              <div className="cartCount">{cartCount}</div>
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}
