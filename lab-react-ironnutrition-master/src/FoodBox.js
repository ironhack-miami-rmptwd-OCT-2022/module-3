import React from "react";
import "./App.css";

function FoodBox({theFood, deleteFood, index}){

return(
    <div className="foodbox">
        <p> {theFood.name} </p>
        <img src={theFood.image} width={100} />
        <p>Calories: {theFood.calories}</p>
        <p>Servings: {theFood.servings}</p>
        <b>Total Calories: {theFood.calories * theFood.servings} </b>
        <button onClick={()=>{deleteFood(index)}}>Delete</button>
      </div>
)


}


export default FoodBox;