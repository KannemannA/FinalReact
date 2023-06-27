import React, {useState} from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'

function Favoritos() {
  const [datos, setDatos]= useState(JSON.parse(localStorage.getItem('favs'))||[])
  const handlefavs=(storage)=>{
    localStorage.setItem('favs', JSON.stringify(datos.filter((item)=> item.id!==storage.id)))
    setDatos(JSON.parse(localStorage.getItem('favs')))
  }
  return (
    <>
        <h2>Favoritos</h2>
        {datos.length==0 ?
        <h5>No tienes ningun odontologo marcado como favorito, intenta agregarlos desde <Link to={'/'}>aqui</Link></h5> :
        <ul>{datos.map(datos =><Card key={datos.id} nombre={datos.nombre} usuario={datos.usuario} id={datos.id} favs={handlefavs}/>)}</ul>}
    </>
  )
}

export default Favoritos