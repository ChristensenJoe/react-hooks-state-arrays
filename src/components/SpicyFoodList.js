import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    setFoods((foods) => [...foods, newFood])
    console.log(newFood);
  }

  function handleLiClick(id) {
    // setFoods((foods) => foods.filter((element) => {
    //   return element.id !== id;
    // }))
    setFoods((foods) => foods.map((food) => {
      if(food.id === id) {
        food.heatLevel++;
        return food;
      }
      return food;
    }))
  }

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foods.map((element) => {
        return (
          <li onClick={() => {handleLiClick(element.id)}} 
          key={element.id}>
            {`${element.name} | Heat: ${element.heatLevel} | Cuisine: ${element.cuisine}`}
            </li>
        )
      })}</ul>
    </div>
  );
}

function Filter() {
  const [filterBy, setFilterBy] = useState("All");
  const [foods, setFoods] = useState(spicyFoods);
  function handleFilterChange(event) {
    setFilterBy(event.target.value);
  }

  const foodsToDisplay = foods.filter((food) => {
    if(filterBy ==="All") {
      return true;
    }
    else {
      return food.cuisine === filterBy;
    }
  });

  return (
    <select name="filter" onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select> 
  );
}

export default SpicyFoodList;
export {Filter};
