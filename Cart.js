import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartctx = useContext(CartContext);
  console.log("cartCtx is ", cartctx);

  const totalAmount = cartctx.totalAmount.toFixed(2);
  const hasItems = cartctx.items.length > 0;

  const cartItemRemoveHandler = id => {
    cartctx.removeItem(id)
  }

  const cartItemAddHandler = item => {
    cartctx.addItem({...item, amount : 1})
  }

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartctx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove = {cartItemRemoveHandler.bind(null,item.id)}
          onAdd = {cartItemAddHandler.bind(null,item)}

        />
        // <li key={item.id}>
        //   <div className={classes.cover}>
        //     <div className={classes.itemname}>{item.name}</div>
        //     <div className={classes.items}>
        //       <span className={classes.amt}>
        //         Rs. {item.price}
        //       </span>
        //       <span className={classes.totnum}>
        //         x {item.amount}
        //       </span>
        //     </div>
        //     <div className={classes.action}>
        //       <button > - </button>
        //       <button > + </button>
        //     </div>
        //   </div>
        // </li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onCloseCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>Rs. {totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCloseCart}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;








// console.log(cartctx);

// const [itemQty , setItemQty] = useState({})
// console.log('item quantity is ',itemQty)

// const removeItemHandler = (item) => {
//   console.log('received item ',item)
//   // // console.log('item is ',item)
//   // const newQty = {...item}
//   // // console.log('newQty is ',newQty)
//   // console.log('before ',newQty.quantity)
//   // if (newQty.quantity > 0) {
//   //   // newQty.quantity = +newQty.quantity - 1
//   //   console.log('new quantity ',newQty.quantity)
//   //   setItemQty((item)=> {
//   //     console.log('returned qty ',newQty.quantity)
//   //     return +newQty.quantity - 1})
//   //   console.log('updated newQty is ', itemQty.quantity)
//   }

// const addItemHandler = (item) => {
//   const  newQty = {...itemQty}
//   newQty[item.name] = (newQty[item.name] || 0 ) + 1
//   setItemQty(newQty)
//   cartctx.addItem({ ...item, quantity: newQty[item.name] });
// } ..........

// const groupedItems = {};
  // cartctx.items.forEach((item) => {
  //   console.log('received item is ',item)
  //   if (groupedItems[item.name]) {
  //     groupedItems[item.name].quantity =
  //       +groupedItems[item.name].quantity + +item.quantity;
  //   } else {
  //     groupedItems[item.name] = { ...item };
  //   }
  // });

  // let totalprice = 0;
  // Object.keys(groupedItems).forEach((itemname) => {
  //   // console.log("total price is", groupedItems[itemname]);
  //   const item = groupedItems[itemname];
  //   totalprice += item.price * item.quantity;
  // });


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
