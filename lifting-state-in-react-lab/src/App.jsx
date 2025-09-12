import './App.css';
import {possibleIngredients} from './Ingredient/Ingredients'
import BurgerStack from './components/BurgerStack/BurgerStack'
import { useState } from 'react';
import IngredientList from './components/IngredientList/IngredientList';


const App = () => {

  const [stack, setStack] = useState([])
  const [availableIngredient, setAvailableIngredient] = useState(possibleIngredients)

  const addIngredient = (ingredient) => {
    setStack([...stack, ingredient])
    setAvailableIngredient(availableIngredient.filter(item => item.name !== ingredient.name))
  }

  const removeIngredient = (ingredient) => {
    setStack(stack.filter(item => item.name !== ingredient.name))
    setAvailableIngredient([...availableIngredient, ingredient])
  }


  // why does adding the index fix the issue? 
  return (
    <main>
      <h1>Burger Stacker</h1>
      {/* <ul>
       {availableIngredient.map((ingredient, index) => 
        <li key={index} style={{ backgroundColor: ingredient.color }}>
          <p>{ingredient.name}</p>
          <button onClick={() => addIngredient(ingredient)}>+</button>
        </li>)}
      </ul> */}

      <IngredientList 
        availableIngredient = {availableIngredient}
        addIngredient = {addIngredient}
      />

      {/* <ul>
        {stack.map((item, index) => (
          <li key={index} style={{backgroundColor: item.color }}>
            <p>{item.name}</p>
            <button onClick = {() => removeIngredient(item)}>x</button>
          </li>
        ))}
      </ul> */}

      <BurgerStack 
        stack = {stack}
        removeIngredient = {removeIngredient}
      />


    </main>
  );

};

export default App;
