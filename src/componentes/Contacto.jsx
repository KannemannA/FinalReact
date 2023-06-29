import React from 'react'
import { useState } from 'react'
import style from './../estiloComponentes/Contacto.module.css'

function Contacto() {
    const [data, setData] = useState()
    const [error,setError] = useState('')
    const formData=(e)=>{
      e.preventDefault()
      setError('')
      handleInputValues(e.target[0].value)
    }
    const handleInputValues=(e)=>{
        if(e.length<=4){
            setData(undefined)
            setError("ingrese un nombre con un minimo de 5 caracteres")
            return
          }
      setData(e)
    }
    return (
      <div className={style.formc}>
      <form onSubmit={formData} className={style.form}>
        <h2>Contactanos!</h2>
        <label htmlFor="nombre">Nombre completo:</label>
        <input type="text" id="nombre" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />
        <button type="submit" > enviar</button>
        {error?<p style={{color: "red"}}>{error}</p>:undefined}
        {data?<p>Gracias {data}, te contactaremos cuando antes vía mail</p>: undefined}
      </form>
      </div>
    )
}

export default Contacto