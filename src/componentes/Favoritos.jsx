import React, {useState} from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'

function Favoritos() {
  const [datosFavs, setDatosFavs]= useState(JSON.parse(localStorage.getItem('favs'))||[])
  const handlefavs=(storage)=>{
    localStorage.setItem('favs', JSON.stringify(datosFavs.filter((item)=> item.id!==storage.id)))
    setDatosFavs(JSON.parse(localStorage.getItem('favs')))
  }
  return (
    <>
        <h2>Favoritos</h2>
        {datosFavs.length==0 ?
        <h5>No tienes ningun odontologo marcado como favorito, intenta agregarlos desde <Link to={'/'}>aqui</Link></h5> :
        <ul>{datosFavs.map(datos =><Card key={datos.id} nombre={datos.nombre} usuario={datos.usuario} id={datos.id} favs={handlefavs} boton={datosFavs}/>)}</ul>}
    </>
  )
}

export default Favoritos