import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import { productCard } from '../components/styles';
import {
  addToCart,
  cookieChecker,
  getCartCount,
  minusFromCart,
} from '../util/cartFunctions';
import { getProducts } from '../util/database';

export default function Products(props) {
  cookieChecker();

  const productList = props.products.map((product) => (
    <div key={product.id} css={productCard}>
      <div>
        <Image
          src={`/img/${product.name}.jpg`}
          alt={product.title}
          width={200}
          height={200}
          layout="responsive"
        />
      </div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>€{(product.price / 100).toFixed(2)}</p>
      <button
        onClick={() => {
          addToCart(props.cart, product.id);
          props.setCartCount(getCartCount(props.cart));
        }}
      >
        Add to Cart
      </button>
      <button
        onClick={() => {
          minusFromCart(props.cart, product.id);
          props.setCartCount(getCartCount(props.cart));
        }}
        disabled={product.quantity === 0}
      >
        Remove From Cart
      </button>
    </div>
  ));

  return (
    <div>
      <Layout cartCount={props.cartCount}>
        <Head>
          <title>Products</title>
          <meta description="Products, Prices, Descriptions" />
        </Head>

        <div
          style={{
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'space-around',
          }}
        >
          {productList}
        </div>
      </Layout>
    </div>
  );
}

// Code in getServerSideProps
// runs only in Node.js
// and allows you to do some
// fancy things:
// - Read files from the file system
// - Connect to a (real) database
export async function getServerSideProps() {
  // Get a list of products for the products page
  const products = await getProducts();

  return {
    props: {
      products,
    },
  };
}

/* old code

          {props.products.map((product) => {
            return (
              <div css={productCard} key={product.id}>
                <Image
                  src={`/img/${product.name}.jpg`}
                  alt={product.name}
                  width="400"
                  height="400"
                />

                <hr />
                <h2>{product.title}</h2>
                <p className="description">{product.description}</p>
                <hr />
                <p className="price">€{(product.price / 100).toFixed(2)}</p>
                <div className="rowWrapper">
                  <button
                    className="cartButton"
                    onClick={() => {
                      props.setCart(addToCart(props.cart, product));
                      props.setCartCount(getCartCount(props.cart));
                    }}
                  >
                    Add To Cart
                  </button>
                  <button
                    className="cartButton"
                    onClick={() => {
                      props.setCart(minusFromCart(props.cart, product));
                      props.setCartCount(getCartCount(props.cart));
                    }}
                  >
                    Remove From Cart
                  </button>
                </div>
              </div>
            );
          })}
          */
