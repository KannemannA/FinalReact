import React, {useContext} from 'react'
import logo from "./../assets/logo.png"
import { Link } from 'react-router-dom'
import style from "./../estiloComponentes/NavBar.module.css"
import { contexto } from '../contexto/ThemeContext'



function NavBar() {
  const {cambiar}= useContext(contexto)
  const handle =()=> cambiar()
  return (
    <nav className={style.nav}>
      <img src={logo} alt="" className={style.logo} />
      <ul>
        <Link to="/" >Home</Link>
        <Link to='/contacto' >Contacto</Link>
        <Link to='/favoritos' className={style.fav} >Favoritos</Link>
      </ul>
      <input type="checkbox" id="darkmode-toggle" onClick={handle}/>
      <label htmlFor="darkmode-toggle">
        <svg className={style.sol} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Environment / Sun">
            <path id="Vector" d="M12 4V2M12 20V22M6.41421 6.41421L5 5M17.728 17.728L19.1422 19.1422M4 12H2M20 12H22M17.7285 6.41421L19.1427 5M6.4147 17.728L5.00049 19.1422M12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
        </svg>
        <svg className={style.luna} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#000000" d="M240.448 240.448a384 384 0 1 0 559.424 525.696 448 448 0 0 1-542.016-542.08 390.592 390.592 0 0 0-17.408 16.384zm181.056 362.048a384 384 0 0 0 525.632 16.384A448 448 0 1 1 405.056 76.8a384 384 0 0 0 16.448 525.696z"/></svg>
      </label>
    </nav>
  )
}

export default NavBar