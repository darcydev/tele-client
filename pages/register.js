import { useContext } from 'react';
import Router from 'next/router';
import Link from 'next/link';

import { RegisterForm } from '../components/Forms/RegisterForm';
import AppContext from '../context/AppContext';

export default function RegisterPage() {
  const { isAuth } = useContext(AppContext);

  if (isAuth) {
    Router.push('/user');
    return null;
  }

  return (
    <div>
      <h1>Register</h1>
      <RegisterForm />
      <div>
        <Link href='/login'>Already registered? Login here</Link>
      </div>
    </div>
  );
}
