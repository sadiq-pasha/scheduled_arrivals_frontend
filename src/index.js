import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Scroll from './components/ScrollTop'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Scroll showBelow={250}/>
    <App />
  </React.StrictMode>
)
