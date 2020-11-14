import { useState, useEffect } from 'react';
import Cookie from 'js-cookie';
import fetch from 'isomorphic-fetch';

import Layout from '../components/Layout';

import AppContext from '../context/AppContext';

import 'antd/dist/antd.css';
import '../css/global.css';

const MyApp = ({ pageProps, Component }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = Cookie.get('token');

    if (token) {
      // authenticate the token on the server and place set user object
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(async (res) => {
        if (!res.ok) {
          Cookie.remove('token');
          setUser(null);
          return null;
        } else {
          const user = await res.json();

          console.log('user :>> ', user);
          setUser(user);
        }
      });
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        user,
        isAuth: !!user,
        setUser,
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
};

export default MyApp;
