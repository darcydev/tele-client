import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';

import { LeftNavMenu, RightNavMenu } from './Navigation/NavMenu';
import { Footer } from './Layout/Footer';

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
        <link rel='preconnect' href='https://fonts.gstatic.com'></link>
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <StyledHeader>
        <div className='content'>
          <LeftNavMenu />
          <div className='logo-wrp'>
            <Link href='/'>
              <img src='./dummy-logo.jpg' alt='' />
            </Link>
          </div>
          <RightNavMenu />
        </div>
      </StyledHeader>
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

const StyledHeader = styled.header`
  padding: 20px 40px;
  background: #000;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo-wrp {
      img {
        width: 100px;
        height: auto;
      }
    }
  }
`;
