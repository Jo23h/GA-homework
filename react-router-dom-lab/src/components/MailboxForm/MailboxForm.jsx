
function MailboxForm({
    handleSubmit,
    boxholderName,
    handleInputChange,
    boxSize,
    setBoxSize
}) {
  return (
   <>
    <form onSubmit = {handleSubmit}>
        <div>
          <h3>Enter a Boxholder:</h3>
          <input
            type = 'text'
            placeholder = 'Boxholder name'
            value = {boxholderName}
            onChange = {handleInputChange}
          />
        </div>

        <div>
          <h3>Select a Box Size:</h3>
          <select 
            value = {boxSize}
            onChange = {(event) => setBoxSize(event.target.value)}
          >
            <option value = "">Choose a Box Size</option>
            <option value = "Small">Small</option>
            <option value = "Medium">Medium</option>
            <option value = "Large">Large</option>
          </select>
        </div>

        <button type = 'submit'>Submit</button>
      </form>
   </>
  )
}

export default MailboxForm