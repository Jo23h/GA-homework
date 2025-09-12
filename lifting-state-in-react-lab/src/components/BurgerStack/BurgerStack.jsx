

const BurgerStack = ({stack, removeIngredient}) => {
  return (
    <ul>
        {stack.map((item, index) => (
          <li key={index} style={{backgroundColor: item.color }}>
            <p>{item.name}</p>
            <button onClick = {() => removeIngredient(item)}>x</button>
          </li>
        ))}
      </ul>
  )
};

export default BurgerStack;
