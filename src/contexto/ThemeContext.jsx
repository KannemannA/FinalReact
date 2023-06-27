import React, { createContext, useState } from 'react'

export const contexto = createContext()

// eslint-disable-next-line react/prop-types
export function ThemeContext(prop) {
const [values, setValues]= useState("")
const updateValues = ()=>{
  setValues((values)=> values===""? "dark" : "")
}
const Theme={
  theme: values,
  cambiar: updateValues
}
  return (
    <contexto.Provider value={Theme}>
        {prop.children}
    </contexto.Provider>
  )
}