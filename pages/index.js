import Link from 'next/link';
import styled from 'styled-components';

function Home() {
  return (
    <>
      <StyledHero>
        <div className='content'>
          <h1>Ipsum nisi deserunt</h1>
          <h2>Eu tempor aliqua pariatur ea eiusmod anim</h2>
          <button>
            <Link href='/products'>Shop</Link>
          </button>
        </div>
      </StyledHero>
    </>
  );
}

export default Home;

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
