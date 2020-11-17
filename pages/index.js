import Link from 'next/link';
import styled from 'styled-components';

export default function Home() {
  return (
    <div className='home-page-wrp'>
      <Hero />
      <StyledSection className='page'>
        <div className='content'>
          <ProductsBoxes />
          <HowToBoxes />
        </div>
      </StyledSection>
    </div>
  );
}

const Hero = () => (
  <StyledHero>
    <div className='content'>
      <h1>Ipsum nisi deserunt</h1>
      <h2>Eu tempor aliqua pariatur ea eiusmod anim</h2>
    </div>
    <button>GET STARTED</button>
  </StyledHero>
);

const ProductsBoxes = () => (
  <div className='products-wrp'>
    <h3>How can we help?</h3>
    <div className='boxes-wrp'>
      <Link href='/categories/hair'>
        <div className='box-wrp hair'>
          <h4>Hair</h4>
        </div>
      </Link>
      <div className='box-wrp sex'>
        <h4>Sex</h4>
      </div>
      <div className='box-wrp skin'>
        <h4>Skin</h4>
      </div>
      <div className='box-wrp sleep'>
        <h4>Sleep</h4>
      </div>
      <div className='box-wrp cognitive'>
        <h4>Cognitive</h4>
      </div>
    </div>
  </div>
);

const HowToBoxes = () => (
  <div className='how-to-wrp'>
    <h3>How does it work?</h3>
    <div className='boxes-wrp'>
      <div className='box-wrp'>
        <h4>1) Book an assessment</h4>
      </div>
      <div className='box-wrp'>
        <h4>2) Doctor perscribes</h4>
      </div>
      <div className='box-wrp'>
        <h4>3) Free shipping</h4>
      </div>
    </div>
  </div>
);

const StyledHero = styled.section`
  background: lightblue;
  padding: 350px 0;

  .content {
    text-align: center;

    h1 {
    }

    h2 {
    }

    button {
      background: inherit;
      border: none;
      border: 1px solid white;
      padding: 20px 40px;
    }
  }
`;

const StyledSection = styled.section`
  padding: 50px 0;

  .content {
    h3 {
      text-align: center;
      text-transform: uppercase;
      margin: 25px 0;
    }

    .boxes-wrp {
      display: flex;
      flex-wrap: wrap;

      .box-wrp {
        cursor: pointer;
        padding: 20px;
        border-radius: 4px;
        background: lightblue;
        flex: 0 0 18%;
        text-align: center;
        margin: 0 10px;
        width: 14vw;
        height: 14vw;
        box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.1);
        transition: transform 0.2s cubic-bezier(0.645, 0.045, 0.355, 1),
          box-shadow 0.2s cubic-bezier(0.645, 0.045, 0.355, 1),
          -webkit-transform 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

        &:hover {
          background: red;
        }
      }
    }
  }
`;
