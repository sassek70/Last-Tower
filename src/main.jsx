import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router} from 'react-router-dom'
// import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'

// React Router Version 6.5
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element:
//   },
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    // <RouterProvider router={router}/>
  // </React.StrictMode>,

  <Router>
    <App />
  </Router>
)
