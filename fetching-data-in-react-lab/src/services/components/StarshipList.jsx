import StarshipCard from "./StarshipCard"

function StarshipList({data}) {
  return (
    <ul style ={{listStyle: 'none'}}>
        {data.map((starship) => (
            <StarshipCard starship = {starship}/>
      ))} 
    </ul>
  )
}

export default StarshipList