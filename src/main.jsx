import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { Routes } from './Utilites/Routes/Routes.jsx'
import { HelmetProvider } from 'react-helmet-async'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import { store } from './Redux/App/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <div className=' mx-auto'>
          <ToastContainer />
          <RouterProvider router={Routes} />
        </div>
      </HelmetProvider>
    </Provider>
  </React.StrictMode>
)
