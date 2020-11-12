import React from 'react';
import Head from 'next/head';
import { Layout as AntLayout } from 'antd';

const { Header, Footer, Content } = AntLayout;

import NavMenu from './Navigation/NavMenu';

const Layout = (props) => {
  const title = 'Welcome to Next.js!';

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <AntLayout>
        <Header>
          <NavMenu />
        </Header>
        <Content>{props.children}</Content>
        <Footer>This is the Footer</Footer>
      </AntLayout>
    </div>
  );
};

export default Layout;
