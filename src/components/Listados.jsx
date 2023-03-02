import React from 'react'
import Estudiantes from './Estudiantes'

const Listados = () => {
  return (
    <div className='p-[20px] md:w-1/2 lg:w-3/5 bg-[#22333b] text-[#fffffc] rounded-md h-screen overflow-y-scroll'>
        <h1 className='font-bold text-center text-xl'>Listado de Estudiantes</h1>
        <h2 className='font-bold text-center'>Administra Estudiante</h2>

        <Estudiantes/>
        <Estudiantes/>
        <Estudiantes/>
        <Estudiantes/>
        <Estudiantes/>

    </div>
  )
}

export default Listados