import logo from './logo.svg';
import './App.css';
import bunchaFoods from "./foods.json"
import FoodBox from "./FoodBox";
import NewFood from './NewFood';
import { useState } from 'react';

function App() {
  const [allTheFoods, setAllTheFoods] = useState(bunchaFoods);
  const [formShowing, setFormShowing] = useState(false);

  const addNewFoodToList = (newFoodObject)=>{
    const foodsCopy = [...allTheFoods];
    foodsCopy.unshift(newFoodObject);
    setAllTheFoods(foodsCopy);
  }


  const deleteFood = (index) =>{
    const foodsCopy = [...allTheFoods];
    foodsCopy.splice(index,1);
    setAllTheFoods(foodsCopy);
  }

  return (
    <div className="App">
      {formShowing && <NewFood addNewFoodToList={addNewFoodToList} />}
      <button onClick={()=>{setFormShowing(!formShowing)}}>{formShowing? 'Hide Form' : 'Add New Food'}</button>
      <h2>Food List</h2>
      <br/><br/>
        {allTheFoods.map((eachFood, index)=>{
          return(
          <FoodBox key={eachFood.name} theFood={eachFood} deleteFood={deleteFood} index={index} />
        );
      })
    }
    </div>
  );
}

export default App;
