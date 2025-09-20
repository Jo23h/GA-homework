function StarshipSearch({
  handleSubmit,
  searchTerm,
  handleInputChange,
  prevSearchTerm,
  handleReset,
  displayedStarships
}) {
  return (
    <>
    <h2>Search</h2>
      <form onSubmit = {handleSubmit}>
        <div>
          <label>Search Term:</label>
          <input 
            type = 'text'
            placeholder = 'Search for a starship by name.'
            value = {searchTerm}
            onChange = {handleInputChange}
          />
          <button type = 'submit'>Search</button>
        </div>
      </form>
      
      {/* If prevSearchTerm is truthy (has a value) then show button */}
      {prevSearchTerm && (
        <button onClick = {handleReset}>Show all starships</button>
      )}

    <h2>Starships</h2>
      <div>
        <p>Number of results: {displayedStarships.length}</p>
      </div>
    </>
  )
}

export default StarshipSearch