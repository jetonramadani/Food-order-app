import React from "react";
import { DUMMY_MEALS } from "./dummy-meals";
import classes from "./AvailableMeals.module.scss";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
const AvailableMeals = () => {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal) => (
            <MealItem key={meal.id} {...meal} />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
