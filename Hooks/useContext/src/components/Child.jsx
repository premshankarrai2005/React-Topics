import React, { useContext } from 'react';
import Create from './createContext';

export default function Child() {
    const user = useContext(Create)
  return (
    <div>
      <h3>This is the Child Component.</h3>
      <p>Hii my name is {user.name} and Age is {user.Age}</p>
    </div>
  );
}
