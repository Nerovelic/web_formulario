import React from 'react'
// import '../styles/cabezaStyle.css'

const Cabecera = ({titulo}) => {
  return (
    <>
      <h1 className='font-black uppercase text-4xl text-center mt-4 text-black'>
        Administrador de <span className='text-black'>Estudiante</span>
      </h1>
    </>
  )
}

export default Cabecera