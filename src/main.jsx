import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { Routes } from './Utilites/Routes/Routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className=' mx-auto'>
      <RouterProvider router={Routes} />
    </div>
  </React.StrictMode>
)
