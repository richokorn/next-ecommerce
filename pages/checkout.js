import Head from 'next/head';
import Layout from '../components/Layout';
import { cookieChecker } from '../util/cartFunctions';
import { getProducts } from '../util/database';

export default function Checkout(props) {
  cookieChecker();

  // props.products contains all the main info we need.
  // However want to list out the items in the cart, and populate it with info we can only get from props.products.
  // So we need to loop through the cart and find the matching product in props.products.
  // Then we can add the info from props.products to the cart.
  // Then we can render the cart items.

  const cartItems = props.cart.map((item) => {
    const product = props.products.find((product) => product.id === item.id);
    return {
      ...item,
      ...product,
    };
  });

  return (
    <Layout cartCount={props.cartCount}>
      <Head>
        <title>Checkout</title>
        <meta name="checkout" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Checkout</h1>
      <div>
        {cartItems.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>€{(item.price / 100).toFixed(2)}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const products = await getProducts();
  return {
    props: {
      products: products,
    },
  };
}
