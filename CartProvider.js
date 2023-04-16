import React,{useState} from "react"
import CartContext from "./cart-context"

const CartProvider = props => {
    const [items,updateitems] = useState([])

    const addItemToCartHandler = item => {
        updateitems([...items, item])
    }

    const removeItemFromCarthandler = id => {}

    const cartContext = {
        items : items,
        totalAmount : 0,
        addItem : addItemToCartHandler,
        removeItem : removeItemFromCarthandler
    }

    return <CartContext.Provider value={cartContext}>
        {console.log('inside cart context provider',cartContext)}
        {props.children}
    </CartContext.Provider>
} 

export default CartProvider