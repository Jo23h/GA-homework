import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*  By wrapping BrowserRouter around the App component, 
    it ensures that routing functionality is available within the App component tree. */}
    <BrowserRouter>
       <App />
    </BrowserRouter>
  </StrictMode>,
)
