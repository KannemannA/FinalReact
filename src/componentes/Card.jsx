/* eslint-disable react/prop-types */
//Perdon, como no entindo esLint, Visual  me suguirio lo de arriba.
import React from 'react'
import image from "./../assets/defaultImage.png"
import { Link } from 'react-router-dom'
import style from './../estiloComponentes/Card.module.css'

function Card({nombre, usuario, id, favs}) {
  const storage={ nombre, usuario, id }
  const handleBoton=()=>{
    favs(storage)
  }
  
  return (
    <div className={style.card}>
        <Link className={style.link} to={`/odontologo/${id}`}>{nombre}</Link>
        <img className={style.img} src={image} alt="Foto de perfil" />
        <h4 className={style.user}>{usuario}</h4>
        <input type='checkbox' id={id} />
        <label htmlFor={id}>
        <svg viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve"><path onClick={handleBoton} className={`${style.corazon} ${style.favs}`} d="M60.732 29.7C41.107 29.7 22 39.7 22 67.41c0 27.29 45.274 67.29 74 94.89 28.744-27.6 74-67.6 74-94.89 0-27.71-19.092-37.71-38.695-37.71C116 29.7 104.325 41.575 96 54.066 87.638 41.516 76 29.7 60.732 29.7z" /></svg>
        </label>
    </div>
  )
}

export default Card