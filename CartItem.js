import classes from './Cart.module.css'

const CartItem = props => {
    return <li key={props.id}>
          <div className={classes.cover}>
            <div className={classes.itemname}>{props.name}</div>
            <div className={classes.items}>
              <span className={classes.amt}>
                Rs. {props.price}
              </span>
              <span className={classes.totnum}>
                x {props.amount}
              </span>
            </div>
            <div className={classes.action}>
              <button onClick={props.onRemove} > - </button>
              <button onClick = {props.onAdd}> + </button>
            </div>
          </div>
        </li>
}

export default CartItem