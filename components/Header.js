import { css } from '@emotion/react';
import Link from 'next/link';
import { headerLeft, headerRight, headerWrapper } from './styles';

export const aa = css``;

export default function Header(props) {
  return (
    <header>
      <div css={headerWrapper}>
        <div style={{ height: '2em', width: '0px' }} />
        <div css={headerLeft}>
          <Link href="/">
            <a>
              <img src="/img/logo-crop.png" alt="" style={{ height: '2em' }} />
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
