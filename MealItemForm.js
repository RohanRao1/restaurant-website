import React, {useContext, useState} from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'
import CartContext from '../../../store/cart-context'

const MealItemForm = (props) => {
    const [num, setNum] = useState()
    const cartCntx = useContext(CartContext)
    console.log(cartCntx)

    const quantityHandler = (event) => {
        setNum(event.target.value)
    }

    const addItemToCart = (event) => {
        event.preventDefault()
        console.log('updated number', num)
        cartCntx.addItem({...props.item, quantity : num })
        
    }

    return <form className={classes.form}>
        <Input label="Amount" input={{
            id : 'amount'+props.id,
            type: 'number',
            min : '1',
            max : '5',
            step : '1',
            onChange : quantityHandler
        }} />
        <button onClick={addItemToCart}>+Add</button>
    </form>
}

export default MealItemForm