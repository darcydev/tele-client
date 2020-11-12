import { useContext } from 'react';

import AppContext from '../context/AppContext';

export default function UserPage() {
  const { user } = useContext(AppContext);

  console.log('user :>> ', user);

  return (
    <div>
      {user ? (
        <div className='user-page-wrp'>
          <h2>{user.username}</h2>
          <p>{user.email}</p>
        </div>
      ) : (
        <h1>error: no user found</h1>
      )}
    </div>
  );
}
