import Head from 'next/head';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { getProducts, getProduct } from '../../lib/api';

const ProductPage = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading product...</div>;
  }

  return (
    <div>
      <Head>Hi</Head>
      <div>
        <h1>{product.title}</h1>
        <h2>{product.subtitle}</h2>
      </div>
    </div>
  );
};

export default ProductPage;

export async function getStaticProps({ params }) {
  const product = await getProduct(params.id);

  return { props: { product } };
}

export async function getStaticPaths() {
  const products = await getProducts();
  return {
    paths: products.map((_product) => {
      return {
        params: { id: _product.id },
      };
    }),
    fallback: true,
  };
}
