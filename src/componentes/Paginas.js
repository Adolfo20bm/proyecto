import React from 'react'
import { Routes, Route } from "react-router-dom";
import  {Inicio}  from './Inicio';
import  {Login}  from './Login';
import { ProductosLista } from "./Productos/index";


export const Paginas = () => {
  return (
    <section>
    <Routes>
    <Route path='/inicio' element={<Inicio />}/>
    <Route path="/productos" element={<ProductosLista />}/>
    <Route path='/login' element={<Login />}/>
    </Routes>
    </section>
  )
}