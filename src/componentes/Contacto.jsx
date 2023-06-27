import React from 'react'
import { useState } from 'react'

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
      <>
      <form onSubmit={formData}>
        <label htmlFor="nombre">Nombre completo:</label>
        <input type="text" id="nombre" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />
        <button type="submit" > enviar</button>
        <br />
        {error?<p style={{color: "red"}}>{error}</p>:undefined}
      </form>
      {data?<p>Gracias {data}, te contactaremos cuando antes vía mail</p>: undefined}
      </>
    )
}

export default Contacto