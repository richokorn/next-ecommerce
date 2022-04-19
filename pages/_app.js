import '../styles/globals.css';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { cookieChecker, getCartCount } from '../util/cartFunctions';

function MyApp({ Component, pageProps }) {
  cookieChecker();
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  cookieChecker();

  // in the following useEffect we want to set the cart from the cartCookie if it exists
  // and we want to derive the cartCount from the cart
  useEffect(() => {
    setCart(JSON.parse(Cookies.get('cart')));
    console.log('_app.js useEffect Trigger');
  }, []);

  return (
    <Component
      {...pageProps}
      cart={cart}
      setCart={setCart}
      setCartCount={setCartCount}
      cartCount={cartCount}
    />
  );
}

export default MyApp;
