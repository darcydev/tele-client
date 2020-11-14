import { useRouter } from 'next/router';

import { getProducts, getProduct } from '../../lib/api';

const ProductPage = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading product...</div>;
  }

  console.log('product :>> ', product);

  const { id, title, subtitle, description, price, image } = product;

  const imageUrl = image.formats.thumbnail.url;

  return (
    <div>
      <div className='content'>
        <img src={`http://localhost:1337${imageUrl}`} alt={title} />
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{description}</p>
        <button
          className='snipcart-add-item product__button'
          data-item-id={id}
          data-item-url={router.asPath}
          data-item-name={title}
          data-item-description={description}
          data-item-price={price}
        >
          Add to cart
        </button>
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
