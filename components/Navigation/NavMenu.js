import { useContext } from 'react';
import Link from 'next/link';
import { Menu } from 'antd';
import { IoMdPerson } from 'react-icons/io';

import { logout } from '../../lib/auth';

import AppContext from '../../context/AppContext';

export default function NavMenu() {
  const { user, setUser } = useContext(AppContext);

  return (
    <nav>
      <Menu mode='horizontal'>
        {user && (
          <Menu.Item key='profile' icon={<IoMdPerson />}>
            <Link href='/user'>{user.username}</Link>
          </Menu.Item>
        )}
        {!user && (
          <Menu.Item key='login' icon={<IoMdPerson />}>
            <Link href='/login'>Login</Link>
          </Menu.Item>
        )}
        {!user && (
          <Menu.Item key='sign-up' icon={<IoMdPerson />}>
            <Link href='/register'>Sign up</Link>
          </Menu.Item>
        )}
        {user && (
          <Menu.Item key='logout' icon={<IoMdPerson />}>
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
          </Menu.Item>
        )}
      </Menu>
    </nav>
  );
}
