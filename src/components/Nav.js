import React, { useState } from 'react';
import './Nav.scss';

const Nav = ({ user, logIn }) => {
  const [newUser, setNewUser] = useState('');

  const handleInputChange = e => setNewUser(e.target.value);

  return (
    <p>
      Welcome! { user.name }
      <input onChange={handleInputChange} value={newUser} />
      <button onClick={() => logIn(newUser)}>Log In!</button>
    </p>
  );
}


export default Nav;
