import React, {useState} from 'react';


function NewFood({addNewFoodToList}){
    const [newFood, setNewFood] = useState({name: "", image: "", calories: 0, servings: 0});
   
    const updateInput = (e) =>{
        setNewFood({...newFood, [e.target.name]: e.target.value })
    }

    const addNewFood = (e) =>{
        e.preventDefault();
        addNewFoodToList(newFood);
        setNewFood({name: "", image: "", calories: 0, servings: 0})
    }

    


    return(
        <div>
            <form onSubmit={addNewFood}>
                Name:
                <input type="text" value={newFood.name} onChange={updateInput} name="name" />
                Image:
                <input type="text" value={newFood.image} onChange={updateInput} name="image" />
                Calories:
                <input type="number" value={newFood.calories} onChange={updateInput} name="calories" />
                Servings:
                <input type="number" value={newFood.servings} onChange={updateInput} name="servings" />
                <button>Submit</button>
            </form>
        </div>
    )


}


export default NewFood;