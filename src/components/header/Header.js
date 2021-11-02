import { OrderContext } from '../../context/OrderContext';
import React from 'react';
import './Header.css';

export default function Header() {
  const { orderState } = React.useContext(OrderContext);

  return (
    <>
      <div className='header'>
        <img
          className='headerImg'
          alt='logo'
          src={
            orderState.theme === 'light'
              ? process.env.PUBLIC_URL + '/img/logo.png'
              : process.env.PUBLIC_URL + '/img/dlogo.png'
          }
        ></img>
      </div>
    </>
  );
}
