import Link from 'next/link';
import styled from 'styled-components';

import { getProducts } from '../../lib/api';

export default function Products({ products }) {
  console.log('products :>> ', products);

  return (
    <StyledContainer>
      <div className='page-content'>
        <h1>Products Page</h1>
        <div className='products-list-wrp'>
          {products.map((product) => {
            const { id, title, subtitle, description, price, image } = product;

            return (
              <div key={id} className='product-item'>
                <div className='product-content'>
                  <div className='img-wrp'>
                    <img
                      src={`http://localhost:1337${image.formats.small.url}`}
                      alt='Picture of the author'
                    />
                  </div>
                  <div className='body-wrp'>
                    <h4 className='title'>{title}</h4>
                    <h5 className='subtitle'>{subtitle}</h5>
                    <p className='desc'>{description}</p>
                    <p className='price'>{price}</p>
                    <Link href={`/products/${id}`}>view product</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.section`
  .product-list-wrp {
    display: flex;
    flex: wrap;
  }
`;

export async function getStaticProps() {
  const products = await getProducts();
  return { props: { products } };
}
