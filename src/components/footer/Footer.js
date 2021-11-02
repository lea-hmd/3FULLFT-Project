import './Footer.css';
import React from 'react';
import { OrderContext } from '../../context/OrderContext';

export default function Footer() {
  const { orderState } = React.useContext(OrderContext);

  return (
    <>
      <footer>
        <img
          className='footerImg'
          alt='logo'
          src={
            orderState.theme === 'light'
              ? process.env.PUBLIC_URL + '/img/LMFLogo.png'
              : process.env.PUBLIC_URL + '/img/DMFLogo.png'
          }
        ></img>
      </footer>
    </>
  );
}
