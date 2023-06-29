import React from 'react'
import style from './../estiloComponentes/Footer.module.css'

function Footer() {
  return (
    <div className={style.footer}>
    <p className={style.footerP}>Powered by <span className={style.span}>Alejo Co.</span></p>
    <p className={style.oculto}>cuando no sabes que poner en el footer del proyecto xD</p>
    </div>
  )
}

export default Footer