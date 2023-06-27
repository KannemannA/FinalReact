import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import image from "./../assets/defaultImage.png"

function CardDetalle() {
  const navegar= useNavigate()
  const [datos, setDatos]= useState([])
  const {id}= useParams()
  useEffect(() =>{
      const FetchData= async()=>{
          const data = await(await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)).json()
          setDatos(data)
          console.log(data)
      }
      FetchData()
  },[])
  const volver= () => navegar(-1)
  return (
    <div>
      <img src={image} alt="" />
      <h2>Detalles</h2>
      <h3>{datos.name}</h3>
      <h4><span>Email:</span> {datos.email}</h4>
      <h4><span>Telefono:</span> {datos.phone}</h4>
      <h4><span>Sitio web:</span><a href={`http://${datos.website}`} target="_blank" rel="noopener noreferrer"> {datos.website}</a></h4>
      <button onClick={volver}>Volver</button>
    </div>
  )
}

export default CardDetalle