import React, {  useRef } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
// import CartContext from "../../../store/cart-context";

const MealItemForm = (props) => {
  // const [num, setNum] = useState()
  const amountInputRef = useRef();
//   const cartCntx = useContext(CartContext);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      return;
    }

    props.onAddToCart(enteredAmountNumber)
  };

  // console.log(cartCntx)

  // const quantityHandler = (event) => {
  //     setNum(event.target.value)
  // }

  // const addItemToCart = (event) => {
  //     event.preventDefault()
  //     console.log('updated number', num)
  //     cartCntx.addItem({...props.item, quantity : num })
  // }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        ref={amountInputRef}
        input={{
          id: 'amount',
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
          // onChange : quantityHandler
        }}
      />
      <button>+Add</button>
    </form>
  );
};

export default MealItemForm;
