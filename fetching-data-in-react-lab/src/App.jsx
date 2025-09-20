import { useEffect, useState } from 'react'
import { index } from './services/starshipService'
import './App.css'
import StarshipList from './services/components/StarshipList'
import StarshipSearch from './services/components/StarshipSearch'

function App() {

  const [starshipsData, setStarshipsData] = useState([])
  const [displayedStarships, setDisplayedStarships] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [prevSearchTerm, setPrevSearchTerm] = useState('')


  useEffect(() => {
    const starships = async () => {
      try{

        const data = await index()
        setStarshipsData(data)
        setDisplayedStarships(data)

      } catch(error){
        console.log(error)
      }
    }

    starships()
  }, [])

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const searchResult = starshipsData.filter(
    starship=>starship.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    setDisplayedStarships(searchResult)
    setPrevSearchTerm(searchResult)
    setSearchTerm('')
  }

  const handleReset = () => {
    setDisplayedStarships(starshipsData)
    setPrevSearchTerm('')
    setSearchTerm('')
  }


  return (
    <>
      
      <StarshipSearch 
        handleSubmit={handleSubmit}
        searchTerm={searchTerm}
        handleInputChange={handleInputChange}
        prevSearchTerm={prevSearchTerm}
        handleReset={handleReset}
        displayedStarships={displayedStarships}
      />

      <StarshipList data = {displayedStarships}/>
      
    </>
  )
}

export default App
