import Router from 'next/router';
import Cookie from 'js-cookie';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';

export const registerUser = (values) => {
  // prevent function from being run on the server
  if (typeof window === 'undefined') return;

  const { username, email, first_name, last_name, DOB, password } = values;

  return new Promise((resolve, reject) => {
    axios
      .post(`${API_URL}/auth/local/register`, {
        username,
        email,
        password,
        first_name,
        last_name,
        DOB,
      })
      .then((res) => {
        // set token response from Strapi for server validation
        Cookie.set('token', res.data.jwt);

        // resolve promise to set loading to false in signup form
        resolve(res);
        Router.push('/');
      })
      .catch((err) => {
        // reject the promise and pass the error object back to the form
        reject(err);
      });
  });
};

export const login = (values) => {
  //prevent function from being ran on the server
  if (typeof window === 'undefined') return;

  const { email, password } = values;

  return new Promise((resolve, reject) => {
    axios
      .post(`${API_URL}/auth/local/`, { identifier: email, password })
      .then((res) => {
        //set token response from Strapi for server validation
        Cookie.set('token', res.data.jwt);

        //resolve the promise to set loading to false in SignUp form
        resolve(res);
        Router.reload();
      })
      .catch((error) => {
        //reject the promise and pass the error object back to the form
        reject(error);
      });
  });
};

export const logout = () => {
  // remove token and user cookie
  Cookie.remove('token');
  delete window.__user;

  // sync logout between multiple windows
  window.localStorage.setItem('logout', Date.now());

  // redirect to homepage
  Router.push('/');
};
