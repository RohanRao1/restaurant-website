import React, { useState, useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  console.log('state ', state, 'action ', action)
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemindex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemindex];

    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemindex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    console.log('item id is ',action)

    const existingCartIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingItem = state.items[existingCartIndex]
    const updatedTotalAmount = state.totalAmount - existingItem.price
    let updatedItems ;
    if (existingItem.amount === 1) {
        updatedItems = state.items.filter(item => item.id !== action.id)
    } else {
      const updatedItem = {
        ...existingItem, 
        amount : existingItem.amount - 1
      }
      updatedItems = [...state.items]
      updatedItems[existingCartIndex] = updatedItem
    }

    return {
      items : updatedItems,
      totalAmount : updatedTotalAmount
    }

  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    // setItems([...items, item])
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCarthandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCarthandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {/* {console.log('inside cart context provider',cartContext)} */}
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
