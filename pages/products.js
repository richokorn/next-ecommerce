import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import { productCard } from '../components/styles';
import { getProducts } from '../util/database';

export default function Products(props) {
  return (
    <div>
      <Layout>
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
                  <button className="cartButton" onClick={() => null}>
                    Add To Cart
                  </button>
                  <button className="cartButton" onClick={() => null}>
                    Remove From Cart
                  </button>
                </div>
              </div>
            );
          })}
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
