import React from 'react'
import ReactDOM from 'react-dom'
import BurgerApp from './BurgerApp.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <BurgerApp />
    </React.StrictMode>
  </BrowserRouter>
)




