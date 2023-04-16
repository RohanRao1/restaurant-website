import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartctx = useContext(CartContext);

  const groupedItems = {};
  cartctx.items.forEach((item) => {
    
    if (groupedItems[item.name]) {
      groupedItems[item.name].quantity = +groupedItems[item.name].quantity + +item.quantity ;
    } else {
      groupedItems[item.name] = { ...item };
    }
  });

  let totalprice = 0 ;
  Object.keys(groupedItems).forEach(itemname => {
    const item = groupedItems[itemname]
    totalprice += item.price * item.quantity
  })

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {Object.keys(groupedItems).map(
        (item) => (
            <li key={item}>
              Name : {item} Price : {groupedItems[item].price} quantity : {groupedItems[item].quantity}
            </li>
        )
      )}
    </ul>
  );

  return (
    <Modal onClose={props.onCloseCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalprice.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCloseCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;















{
  /* <React.Fragment>
        <div className={classes.overlay} />
        <div className={classes.template}>
            <p>Sushi</p>
            <div className={classes.details}>
                <h3>Total Amount</h3>
                <h3>Rs.35</h3>
            </div>
            <div>
                <button classname={}>close</button>
                <button className={classes.two}>Order</button>
            </div>
        </div>
            </React.Fragment> */
}
