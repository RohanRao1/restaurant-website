import React,{useContext} from "react";
import classes from './HeaderCart.module.css'
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext)
    // let quantity = 0
    // console.log('catctx.item is ',cartCtx.items )
    // cartCtx.items.forEach(item => {
    //     //console.log('item is ', item)
    //      quantity = quantity + Number(item.quantity)
    // })
    // console.log(cartCtx.items)
    
    const numOfCartItems = cartCtx.items.reduce((curNum, item) => {
        return curNum  + item.amount 
    }, 0) ;

    return (
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
          {numOfCartItems}
        </span>
      </button>
    );
}

export default HeaderCartButton