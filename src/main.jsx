import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { Routes } from './Utilites/Routes/Routes.jsx'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <div className=' mx-auto'>
        <RouterProvider router={Routes} />
      </div>
    </HelmetProvider>
  </React.StrictMode>
)
