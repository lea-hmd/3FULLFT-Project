import React from 'react';
import { useHistory } from 'react-router';
import SelectableCardPain from '../components/selectableCard/SelectableCardPain';
import SelectableCardViande from '../components/selectableCard/SelectableCardViande';
import SelectableCardGarniture from '../components/selectableCard/SelectableCardGarniture';
import SelectableCardSauce from '../components/selectableCard/SelectableCardSauce';
import { OrderContext } from '../context/OrderContext';

export default function Commande() {
  const { orderState, orderDispatch } = React.useContext(OrderContext);
  let history = useHistory();

  const addToCart = () => {
    history.replace('/choix-pains');
    orderDispatch({ type: 'addOrderToCart' });
    window.location.reload();
  };
  const resetOrder = () => {
    orderDispatch({ type: 'resetOrder' });
    history.replace('/choix-pains');
    window.location.reload();
  };
  return (
    <>
      {' '}
      <div className='viewTitle'>
        <h2>Votre commande : </h2>
      </div>
      <div className='recap'>
        <SelectableCardPain title={orderState.order.pain}></SelectableCardPain>
        <h2>+</h2>
        <SelectableCardViande
          title={orderState.order.viande}
        ></SelectableCardViande>
        {orderState.order.garnitures.length > 0 ? <h2>+</h2> : null}
        {orderState.order.garnitures.length > 0
          ? orderState.order.garnitures.map((garniture) => {
              return (
                <SelectableCardGarniture
                  title={garniture}
                ></SelectableCardGarniture>
              );
            })
          : null}
        {orderState.order.sauces.length > 0 ? <h2>+</h2> : null}
        {orderState.order.sauces.length > 0
          ? orderState.order.sauces.map((sauce) => {
              return <SelectableCardSauce title={sauce}></SelectableCardSauce>;
            })
          : null}
      </div>{' '}
      <div className='btnContainer'>
        <button
          onClick={() => resetOrder()}
          className={orderState.theme === 'light' ? 'button' : 'buttonD'}
        >
          Annuler
        </button>{' '}
        <button
          className={orderState.theme === 'light' ? 'button' : 'buttonD'}
          onClick={addToCart}
        >
          Valider la commande
        </button>
      </div>
    </>
  );
}
