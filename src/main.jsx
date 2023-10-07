import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { Routes } from './Utilites/Routes/Routes.jsx'
import { HelmetProvider } from 'react-helmet-async'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <div className=' mx-auto'>
        <ToastContainer />
        <RouterProvider router={Routes} />
      </div>
    </HelmetProvider>
  </React.StrictMode>
)
