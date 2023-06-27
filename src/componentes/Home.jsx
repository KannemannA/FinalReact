import React, { useEffect, useState } from 'react'
import Card from './Card'

function Home() {
  const [datos, setDatos]= useState([])
  const [favoritos, setFavoritos]=useState(JSON.parse(localStorage.getItem('favs'))||[])
  const handlefavs=(storage)=>{
    favoritos.some((item)=> item.id==storage.id) ?
    localStorage.setItem('favs', JSON.stringify(favoritos.filter((item)=> item.id!==storage.id))) :
    localStorage.setItem('favs', JSON.stringify([...favoritos, storage]))
    setFavoritos(JSON.parse(localStorage.getItem('favs')))
  }
  useEffect(() =>{
    const FetchData= async()=>{
      const data = await(await fetch(`https://jsonplaceholder.typicode.com/users`)).json()
      setDatos(data)
    }
    FetchData()
  },[])
  return (
    <>
        <h2>Nuestros odontologos</h2>
        <ul>
            {datos.map(datos =><Card key={datos.id} nombre={datos.name} usuario={datos.username} id={datos.id} favs={handlefavs} />)}
        </ul>
    </>
  )
}

export default Home