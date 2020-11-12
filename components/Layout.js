import React, { useContext } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { logout } from '../lib/auth';

import AppContext from '../context/AppContext';

const Layout = (props) => {
  const { user, setUser } = useContext(AppContext);

  const title = 'Welcome to Next.js!';

  console.log('user :>> ', user);

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />

        <script src='https://js.stripe.com/v3' />
      </Head>
      <header>
        <nav>
          {user ? (
            <Link href='/user'>{user.username}</Link>
          ) : (
            <Link href='/register'>
              <a>Sign up</a>
            </Link>
          )}
          {user ? (
            <Link href='/'>
              <a
                onClick={() => {
                  logout();
                  setUser(null);
                }}
              >
                Logout
              </a>
            </Link>
          ) : (
            <Link href='/login'>
              <a>Login</a>
            </Link>
          )}
        </nav>
      </header>
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
