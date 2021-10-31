import React from 'react';

const OrderContext = React.createContext();
const localState = JSON.parse(localStorage.getItem('localState'));

const initialState = {
  order: {
    pain: null,
    viande: null,
    garnitures: [],
    sauces: [],
  },
  orderCart: [],
  theme: 'light',
};

function orderReducer(state, action) {
  switch (action.type) {
    case 'switchTheme': {
      return {
        ...state,
        theme: action.payload === 'light' ? 'dark' : 'light',
      };
    }
    case 'choosePain': {
      return {
        ...state,
        order: { ...state.order, pain: action.payload },
      };
    }
    case 'chooseViande': {
      return {
        ...state,
        order: { ...state.order, viande: action.payload },
      };
    }
    case 'chooseGarnitures': {
      let tmp = state.order.garnitures;
      tmp.push(action.payload);
      return {
        ...state,
        order: { ...state.order, garnitures: [...new Set(tmp)] },
      };
    }
    case 'chooseSauces': {
      let tmp = state.order.sauces;
      tmp.push(action.payload);
      return {
        ...state,
        order: { ...state.order, sauces: [...new Set(tmp)] },
      };
    }
    case 'removeGarniture': {
      let tmp = state.order.garnitures;
      tmp.splice(tmp.indexOf(action.payload), 1);
      return {
        ...state,
        order: { ...state.order, garnitures: [...new Set(tmp)] },
      };
    }
    case 'removeSauce': {
      let tmp = state.order.sauces;
      console.log(tmp);
      tmp.splice(tmp.indexOf(action.payload), 1);
      console.log(tmp);
      return {
        ...state,
        order: { ...state.order, sauces: [...tmp] },
      };
    }
    case 'addOrderToCart': {
      let tmp = state.orderCart;
      tmp.push({ kebab: state.order, quantity: 1, id: Date.now() });
      return {
        ...state,
        order: initialState.order,
        orderCart: tmp,
      };
    }
    case 'increaseQty': {
      let tmp = state.orderCart;
      tmp = tmp.map((element) => {
        if (element.id === action.payload) {
          return { ...element, quantity: element.quantity + 1 };
        }
        return element;
      });
      return {
        ...state,
        orderCart: tmp,
      };
    }
    case 'decreaseQuantity': {
      let tmp = state.orderCart;
      tmp = tmp.map((element) => {
        if (element.id === action.payload && element.quantity !== 1) {
          return { ...element, quantity: element.quantity - 1 };
        }
        return element;
      });
      return {
        ...state,
        orderCart: tmp,
      };
    }
    case 'deleteOrderFromCart': {
      let tmp = state.orderCart;
      tmp = tmp.filter((element) => element.id !== action.payload);
      return {
        ...state,
        orderCart: tmp,
      };
    }
    case 'resetOrder': {
      return {
        ...state,
        order: initialState.order,
      };
    }
    case 'cancelAll': {
      return initialState;
    }
    default: {
      return state;
    }
  }
}

function OrderProvider({ children }) {
  const [orderState, orderDispatch] = React.useReducer(
    orderReducer,
    localState || initialState,
  );

  React.useEffect(() => {
    localStorage.setItem('kebabState', JSON.stringify(orderState));
  }, [orderState]);

  return (
    <OrderContext.Provider value={{ orderState, orderDispatch }}>
      {children}
    </OrderContext.Provider>
  );
}

export { OrderProvider, OrderContext };
