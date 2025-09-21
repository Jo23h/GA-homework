import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import MailboxList from './components/MailboxList/MailboxList'
import MailboxForm from './components/MailboxForm/MailboxForm'
import MailboxDetails from './components/MailboxDetails/MailboxDetails'
// import {v4 as uuidv4} from 'uuid'

function App() {

  const [mailboxes, setMailboxes] = useState([])
  const [boxholderName, setBoxholderName] = useState('')
  const [boxSize, setBoxSize] = useState('')

  const handleInputChange = (event) => {
    setBoxholderName(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const addBox = {
      _id: mailboxes.length + 1,
      name: boxholderName,
      box: boxSize
    }

    setMailboxes([...mailboxes, addBox])
    setBoxholderName('')
    setBoxSize('')
  }

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>}/>
        <Route path="mailboxes" element={<MailboxList mailboxes={mailboxes}/>}/>
        <Route path="/new-mailbox" element={<MailboxForm 
          handleSubmit={handleSubmit}
          boxholderName={boxholderName}
          handleInputChange={handleInputChange}
          boxSize={boxSize}
          setBoxSize={setBoxSize}
        />}/>
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />}/>
         <Route path="*" element={<h2>Mailbox Not Found!</h2>}/>
      </Routes>

    </>
  )
}

export default App
