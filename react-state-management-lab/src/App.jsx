import { useState } from 'react';
import './App.css';

const App = () => {
  // Use const because we are not reassigning the variables team or setTeam e.g, team = [...team, newFighter] 
  // but changing the state through setTeam([...team, newFighter])
  // Create state variable aclled team that starts as an empty array, and a function (setTeam) to update team
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
    },
  ]);

  // fighter is not a prop, but a parameter. Include fighter to identify the fighter we are adding
  // Parameter is a value passed to a function. Prop is a value passed to a component 
  const handleAddFighter = (fighter) => {

    // We need the spread operator (...) instead of using team because setTeam([team, fighter]) will
    // create a nested array: [[fighter1, fighter2] fighter3]. The spread operator unpacks each items in 
    // the array and puts all the items (with the new items) into a new array 
    // setTeam accepts only one parameter, which is the array [...team, fighter]
    setTeam([...team, fighter])

    // filter() creates a new array with only the elements that the test function returns true
    // We cannot use filter(fighter => fighter.id !== fighter.id) because this will create a new fighter paramter that
    // supercedes the fighter paramter in handleAddFighter(fighter)
    setZombieFighters(zombieFighters.filter(f => f.id !== fighter.id))

    // Holla for the dollar
    money >= fighter.price ? setMoney(money - fighter.price): console.log("Not enough money")
  }

  // Q: Why is totalStrength not a state variable?? 
  // Q: Difference between forEach vs reduce?
  // map() doesn't work because it creates a new array when totalStrength doesn't even have an array to begin with
  let totalStrength = 0
  team.forEach(fighter => {totalStrength += fighter.strength})

  let totalAgility = 0
  team.forEach(fighter => {totalAgility += fighter.agility})

  // Bye bye
  const handleRemoveFighter = (fighter) =>{
   setTeam(team.filter(f => f.id !== fighter.id))
   setZombieFighters([...zombieFighters, fighter])
   setMoney(money + fighter.price)
  }

  return(
    <>
      <h1>Zombie Fighters</h1>
      <h2>
        Money: {money}
      </h2>
      <h2>
        Strength: {totalStrength}
      </h2>
      <h2>
        Agility: {totalAgility}
      </h2>
      <h2>
        Team
      </h2>
      {team.length === 0 ? <p>Pick some team members</p>:
        <ul>
          {team.map((fighter) => (
          <li key = {fighter.id}>
            <img src = {fighter.img}></img>
            <div><strong>{fighter.name}</strong></div>
            <div>Price: {fighter.price}</div>
            <div>Strength: {fighter.strength}</div>
            <div>Agility: {fighter.agility}</div>
            <button onClick = {()=>handleRemoveFighter(fighter)}>
              Remove
            </button>
          </li>))}
        </ul>
      }
      <h2>Fighters</h2>
        <ul>
          {zombieFighters.map((fighter) => (
          <li key = {fighter.id}>
            <img src = {fighter.img}></img>
            <div><strong>{fighter.name}</strong></div>
            <div>Price: {fighter.price}</div>
            <div>Strength: {fighter.strength}</div>
            <div>Agility: {fighter.agility}</div>

            {/* <button onClick={someFunction}>Click me</button> */}
            {/* onClick is an event handler, which triggers a customed function when an event happens */}
            {/* onClick parameter is empty because we are not passing any data to our handleAddFighter function */}
            {/* onClick = {handleAddFighter(fighter)} does not work; this will call the function immediately when component renders */}
            {/* Conditional rendering: prevent user from buying character when money >= fighter.price */}
            {/* Math.min(fighter.price) ensures that console.log only triggers when user cannot buy any available fighter */}
            {money >= Math.min(fighter.price) ? (
              <button onClick = {() => handleAddFighter(fighter)}>
                Add
              </button>):(console.log("Not enough money"))}
          </li>
          ))}
        </ul>
    </>
  )
};

export default App;

