import React from 'react';
import './Panier.css';
import { OrderContext } from '../../context/OrderContext';
import { getThemeProps } from '@mui/system';
import { useHistory } from 'react-router-dom';

export default function Panier() {
  let history = useHistory();

  const { orderState, orderDispatch } = React.useContext(OrderContext);
  const [cart, setCart] = React.useState(null);
  const [value, setValue] = React.useState(true);
  console.log(orderState.orderCart);

  const reset = () => {
    orderDispatch({ type: 'cancelAll' });
    window.location.reload();
  };

  const changePage = () => {
    history.replace('/préparation-commande');
  };

  const moreQty = (id) => {
    orderDispatch({ type: 'increaseQty', payload: id });
    window.location.reload();
  };
  const lessQty = (id, qty) => {
    if (qty > 1) {
      orderDispatch({ type: 'decreaseQuantity', payload: id });
      window.location.reload();
    } else {
      orderDispatch({ type: 'deleteOrderFromCart', payload: id });
      window.location.reload();
    }
  };
  React.useEffect(() => {
    const builder = () => {
      setCart(
        orderState.orderCart.map((value, index) => {
          let sauce = '';
          for (let i of value.kebab.sauces) {
            sauce += i;
            sauce += ' , ';
          }
          let garni = '';
          for (let i of value.kebab.garnitures) {
            garni += i;
            garni += ' , ';
          }
          return (
            <div className='element'>
              <button onClick={() => moreQty(value.id)}>+</button>
              <button onClick={() => lessQty(value.id, value.quantity)}>
                -
              </button>
              {value.kebab.pain +
                ' / ' +
                value.kebab.viande +
                ' / ' +
                garni +
                ' / ' +
                sauce +
                ' Quantité :' +
                value.quantity}
            </div>
          );
        }),
      );
    };
    if (value) {
      builder();
      setValue(false);
    }
  });

  if (orderState.orderCart.length !== 0) {
    return (
      <div className='Panier'>
        <h2>PANIER</h2>
        {cart}
        <button onClick={() => changePage()} className='button'>
          Commander
        </button>
        <button onClick={() => reset()} className='button'>
          Reset
        </button>
      </div>
    );
  } else {
    return <></>;
  }
}
