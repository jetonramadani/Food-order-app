import React from "react";
import { DUMMY_MEALS } from "./dummy-meals";
import classes from "./AvailableMeals.module.scss";
const AvailableMeals = () => {
  return (
    <section className={classes.meals}>
      <ul>
        {DUMMY_MEALS.map((meal) => (
          <li key={meal.id}>{meal.name}</li>
        ))}
      </ul>
    </section>
  );
};

export default AvailableMeals;
