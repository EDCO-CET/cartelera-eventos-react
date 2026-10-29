import Tarjeta from './componentes/Tarjeta'
import ListaEventos from './componentes/ListaEventos'
import Header from './componentes/Header'
import Footer from './componentes/Footer'
import { Routes, Route } from 'react-router'
import Inicio from './pages/Inicio'
import Admin from './pages/Admin'
import Layout from './componentes/Layout'



function App() {

  /* JSX */ 
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
