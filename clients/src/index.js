import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
// import BrowserRouter with { destructuring } here

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
