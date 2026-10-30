import Tarjeta from './componentes/Tarjeta'
import ListaEventos from './componentes/ListaEventos'
import Header from './componentes/Header'
import Footer from './componentes/Footer'
import { Routes, Route } from 'react-router'
import Inicio from './pages/Inicio'
import Admin from './pages/Admin'
import Login from './pages/Login'
import Layout from './componentes/Layout'
import { RutaProtegida } from './componentes/RutaProtegida'



function App() {

  /* JSX */ 
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Inicio />} />
          <Route element={<RutaProtegida role="admin" />} >
            <Route path="/admin" element={<Admin />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
