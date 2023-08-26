import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/screens/home/Home'
import 'bootstrap/dist/css/bootstrap.css'
import '../src/assets/styles/global.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
