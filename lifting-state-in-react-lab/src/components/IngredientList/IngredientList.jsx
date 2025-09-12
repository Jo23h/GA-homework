

const IngredientList = ({availableIngredient, addIngredient}) => {
  return(
    <>
      <ul>
       {availableIngredient.map((ingredient, index) => 
        <li key={index} style={{ backgroundColor: ingredient.color }}>
          <p>{ingredient.name}</p>
          <button onClick={() => addIngredient(ingredient)}>+</button>
        </li>)}
      </ul>
    </>
  )  
};

export default IngredientList;
