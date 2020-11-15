import { useContext } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { logout } from '../../lib/auth';

import AppContext from '../../context/AppContext';

export const LeftNavMenu = () => {
  return (
    <StyledNavMenu>
      <Link href='/products'>Shop</Link>
      <Link href='/about'>About</Link>
    </StyledNavMenu>
  );
};

export const RightNavMenu = () => {
  const { user, isAuth, setUser } = useContext(AppContext);

  const handleLogout = () => {
    logout();
    setUser(null);
  };

  return (
    <StyledNavMenu>
      {isAuth && <Link href='/user'>{user.first_name}</Link>}
      {isAuth && (
        <Link href='/'>
          <a onClick={handleLogout()}>Logout</a>
        </Link>
      )}
      {!isAuth && <Link href='/login'>Login</Link>}
      {!isAuth && <Link href='/register'>Sign up</Link>}
    </StyledNavMenu>
  );
};

const StyledNavMenu = styled.div`
  a {
    color: #fff;
    margin: 0 10px;
    font-weight: 500;
  }
`;
