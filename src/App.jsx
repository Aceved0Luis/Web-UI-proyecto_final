import { Routes, Route } from "react-router-dom"
import { Overview } from "./rutas/overview"
import { Contactos } from "./rutas/contacts"
import { Favoritos } from "./rutas/favorites"

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={ <Overview /> } />
        <Route path="contactos" element={ <Contactos /> } />
        <Route path="favoritos" element={ <Favoritos /> } />
        <Route path="*" element={ <Overview /> } />
      </Routes>
    </>
  )
}

export default App
