/* eslint-disable react/prop-types */
//Perdon, como no entindo esLint, Visual  me suguirio lo de arriba.
import React from 'react'
import image from "./../assets/defaultImage.png"
import { Link } from 'react-router-dom'

function Card({nombre, usuario, id, favs}) {
  const storage={ nombre, usuario, id }
  const handleBoton=()=>{
    favs(storage)
  }
  
  return (
    <div>
        <Link to={`/odontologo/${id}`}>{nombre}</Link>
        <img src={image} alt="Foto de perfil" />
        <h4>{usuario}</h4>
        {favs?<button onClick={handleBoton}>me gusta</button>:undefined}
    </div>
  )
}

export default Card