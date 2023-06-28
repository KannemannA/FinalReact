import { useContext } from 'react'
import CardDetalle from './componentes/CardDetalle'
import Contacto from './componentes/Contacto'
import Home from './componentes/Home'
import NavBar from './componentes/NavBar'
import { Routes, Route } from 'react-router-dom'
import {contexto} from './contexto/ThemeContext'
import Favoritos from './componentes/Favoritos'
import Footer from './componentes/Footer'

function App() {
  const {theme} = useContext(contexto)
  return (
    <>
      <header className={theme}>
        <NavBar />
      </header>
      <main className={theme}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/favoritos' element={<Favoritos />} />
        <Route path='/odontologo/:id' element={<CardDetalle />} />
      </Routes>
      </main>
      <footer className={theme}>
        <Footer />
      </footer>
    </>
  )
}

export default App
