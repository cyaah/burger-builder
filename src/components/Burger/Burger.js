import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
  let transformediIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return (
          <BurgerIngredient key={igKey + i} type={igKey}>
          </BurgerIngredient>
        );
      }); //[,] Array with two elements
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformediIngredients.length === 0) {
    transformediIngredients = <p>Please start adding ingredients!</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"> </BurgerIngredient>{" "}
      {transformediIngredients}
      <BurgerIngredient type="bread-bottom"> </BurgerIngredient>{" "}
    </div>
  );
};

export default burger;
