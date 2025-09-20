import { useEffect, useState } from 'react'
import { index } from './services/starshipService'
import './App.css'
import StarshipCard from './services/components/StarshipCard'
import StarshipList from './services/components/StarshipList'
import StarshipSearch from './services/components/StarshipSearch'

function App() {

  const [starshipsData, setStarshipsData] = useState([])
  const [displayedStarships, setDisplayedStarships] = useState([])

  // we can't use let searchTerm because everytime React re-renders, the entire function runs again
  // let searchTerm = '' would reset back to empty string; the type value gets lost
  // React doesn't know the component to update 
  const [searchTerm, setSearchTerm] = useState('')
  const [previousSearchTerm, setPreviousSearchTerm] = useState('')

  // useEffect to handle any side effect: any operation that affects something outside of the component itself 
  // - anything beyond just calculating and returning JSX
  useEffect(() => {
    const starships = async () => {
      try{

        const data = await index()
        setStarshipsData(data)
        // Q: why do we need setDisplayedStarships here
        setDisplayedStarships(data)

      } catch(error){
        console.log(error)
      }
    }

    starships()
  }, [])

  // Use useEffect to seperate filter data in its own state and cache filtered results to avoid re-filtering on each render
  // Cache: store the filtered results in displayedStarships state. 
  // Without useState: everytime React re-renders, the entire function runs again and let searchTerm = '' resets back to an empty string
  // The typed value gets lost and React doesn't know which component to update when we change a regular variable in let searchTerm
  
  useEffect(()=>{
    const searchResult = starshipsData.filter (starship => starship.name.toLowerCase().includes(searchTerm.toLowerCase()))

    // update displayed starships based on search result
    setDisplayedStarships(searchResult)

    // Rerun this useEffect whenever searchTerm or starshipsData (e.g., including new data) changes
    // setStarshipData is the function (not the actual data) to update the date
  },[searchTerm, starshipsData])

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value)
  }

  // Form submission 
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <>
      <div>
        <h2>Search</h2>
        <p>Search term: </p>
        <input
          placeholder='Search for a starship by name.'
          value = {searchTerm}
          onChange = {handleInputChange}
        /> 
        <button onClick = {handleInputChange}> Show all starships </button>
      </div>

      {/* Show the updated displayedStarships based on searchTerm */}
      <StarshipList data = {displayedStarships}/>

    </>
  )
}

export default App
