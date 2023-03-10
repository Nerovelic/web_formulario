import React from 'react'

  const Estudiantes = ({estudiante,setEstudiante,eliminarEstudiante}) => {
  const {nombre,carrera,semestre,promedio} = estudiante;
  return (
    <div className='mb-3 py-3 px-3 pb-3 rounded-md shadow-lg  bg-[#023047] font-bold'>
        <p className='font-bold mb-2 uppercase'>Nombre: <span className='font-normal ml-3 normal-case'>{nombre}</span></p>
        <p className='font-bold mb-2 uppercase'>Carrera: <span className='font-normal ml-3 normal-case'>{carrera}</span></p>
        <p className='font-bold mb-2 uppercase'>Semestre: <span className='font-normal ml-3 normal-case'>{semestre}</span></p>
        <p className='font-bold mb-2 uppercase'>Promedio: <span className='font-normal ml-3 normal-case'>{promedio}</span></p>
        <div className='flex-3 space-x-3'>
          <button 
            type='buttom' 
            className='p-2 bg-gradient-to-r  from-[#fb0800] rounded-md' 
            value='Eliminar'
            onClick={() => eliminarEstudiante(estudiante.id)}
            >Eliminar</button>
          <button 
            type='buttom' 
            className='p-2 bg-gradient-to-r from-[#00fb69] rounded-md' 
            value='Modificar'
            onClick={()=>setEstudiante(estudiante)}
          >Modificar</button>
        </div>
    </div>
  )
}

export default Estudiantes