import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Overview } from "./rutas/overview"
import { Contactos } from "./rutas/contacts"
import { Favoritos } from "./rutas/favorites"

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Overview />,
    children: [
      {
        path: '/',
        element: <Overview />,
        
      },
      {
        path: '/contactos',
        element: <Contactos />,
      },
      {
        path: '/favoritos',
        element: <Favoritos />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>,
)
