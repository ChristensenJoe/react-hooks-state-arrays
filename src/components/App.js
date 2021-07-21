import React from "react";
import SpicyFoodList from "./SpicyFoodList";
import {Filter} from "./SpicyFoodList";

function App() {
  return (
    <div>
      <h3>SpicyFoodList</h3>
      <Filter />
      <SpicyFoodList />
    </div>
  );
}

export default App;
