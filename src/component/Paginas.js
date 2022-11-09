import React from 'react'
import { Route, Routes } from "react-router-dom";
import { Ayuda } from './Ayuda';
import { Contactenos } from './Contactenos';
import { Nosotros } from './Nosotros';
import { Principal } from './Principal';
import { Servicios } from './Servicios';



export const Paginas = () => {
  return (
    <section>
      <Routes>
        <Route path='/' element={<Principal />}></Route>
        <Route path='/servicios' element={<Servicios/>}></Route>
        <Route path='/nosotros' element={<Nosotros/>}></Route>
        <Route path='/contactenos' element={<Contactenos/>}></Route>
        <Route path='/ayuda' element={<Ayuda/>}></Route>
      </Routes>

    </section>
  )
}
