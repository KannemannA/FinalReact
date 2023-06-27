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
    <div className={theme}>
      <header>
        <NavBar />
      </header>
      <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/favoritos' element={<Favoritos />} />
        <Route path='/odontologo/:id' element={<CardDetalle />} />
      </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
