import { useContext } from 'react';
import Router from 'next/router';
import Link from 'next/link';

import { LoginForm } from '../components/Forms/LoginForm';
import AppContext from '../context/AppContext';

export default function LoginPage() {
  const { isAuth } = useContext(AppContext);

  if (isAuth) {
    Router.push('/user');
    return null;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
      <div>
        <Link href='/register'>Don't have an account yet? Sign up here</Link>
      </div>
    </div>
  );
}
