import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import NavMenu from './Navigation/NavMenu';

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>Welcome to Next.js!</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link
          rel='stylesheet'
          href='https://cdn.snipcart.com/themes/v3.0.25/default/snipcart.css'
        />
      </Head>
      <header>
        <NavMenu />
      </header>
      <main>
        <StyledContainer>{props.children}</StyledContainer>
      </main>
      <footer>
        This is the Footer
        <script
          async
          src='https://cdn.snipcart.com/themes/v3.0.25/default/snipcart.js'
        ></script>
        <div
          id='snipcart'
          data-api-key='Njc3ZjNlMmQtZTNkOS00YzNiLTk3ZmMtMWUzZmJiY2Q1NDZhNjM3NDA5MDUzMzkzNTUzMTUx'
          hidden
        ></div>
      </footer>
    </div>
  );
};

export default Layout;

const StyledContainer = styled.div`
  width: 1200px;
  max-width: 90%;
  margin: auto;
`;
