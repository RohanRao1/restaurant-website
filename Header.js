import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from './Header.module.css'
import mealsImage from '../../assets/meals.jpg'
//import Card from "../UI/Card";


const Header = (props) => {
    return (
      <React.Fragment >
        <header className={classes.header}>
          <h1>Rasta 63</h1>
          <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className={classes["main-image"]}>
          <img src={mealsImage} alt="table full of food !" />
        </div>
       
      </React.Fragment>
    );
}

export default Header