// import '../styles/formularioStyle.css'

import { useState } from "react"

const Formulario = ({estudiantes,setEstudiantes,estudiante}) => {

  const [nombre,setNombre] = useState('');
  const [carrera,setCarrera] = useState('');
  const [semestre,setSemestre] = useState('');
  const [promedio,setPromedio] = useState('');

  const [error, setError] = useState(false)

  const manejadorSubmit = (e) => {
    e.preventDefault();
    if([nombre.trim(),carrera.trim(),semestre.trim(),promedio.trim()].includes('')){
      console.log("no se permite vacios.....")
      setError(true);
      return;
    }
    setError(false);
    const objetoEstudiante = {
      nombre,
      carrera,
      semestre,
      promedio
   }
   setEstudiantes([...estudiantes,objetoEstudiante])
   limpiar();
  }

  const limpiar = () => {
    setNombre('');
    setCarrera('');
    setSemestre('');
    setPromedio('');
  }
  
  return (
    <div className='p-[20px] md:w-1/2 lg:w-2/5 bg-[#22333b] text-white'>
        <h1 className="font-bold text-center text-xl">Registrar estudiante</h1>
        <h2 className="font-bold text-center">Agrega y Administra</h2>             
        <form
          onSubmit={manejadorSubmit}
        > 
          { error && (
          <div 
          className="bg-red-800 font-bold rounded-md text-center mt-10 pt-2">
            <p>Llenar todos los campos</p>
          </div>)}
          <div>
            <label 
            className="block 
            mb-2 
            mt-2" 
            >Nombre Estudiante</label>
            <input 
              type="text" 
              placeholder="Nombre completo"
              className="border-2 p-1 w-full rounded-md mb-4 text-black" 
              value={nombre}
              onChange = { (e) => setNombre(e.target.value)}
            />
          </div>
          <div>
            <label 
            className="block 
            mb-2 
            mt-2" 
            >Carrera</label>
            <input 
              type="text" 
              placeholder="Carrera"
              className="border-2 p-1 w-full rounded-md mb-4 text-black"
              value={carrera}
              onChange = { (e) => setCarrera(e.target.value)}
            />
          </div>
          <div>
            <label 
            className="block 
            mb-2 
            mt-2" 
            >Semestre</label>
            <input 
              type="text" 
              placeholder="Semestre"
              className="border-2 p-1 w-full rounded-md mb-4 text-black"
              value={semestre}
              onChange = { (e) => setSemestre(e.target.value)} 
            />
          </div>
          <div>
            <label 
            className="block 
            mb-2 
            mt-2" 
            >Promedio</label>
            <input 
              type="text" 
              placeholder="Promedio"
              className="border-2 p-1 w-full rounded-md mb-4 text-black"
              value={promedio}
              onChange = { (e) => setPromedio(e.target.value)} 
            />
          </div>
            <div>
              <button 
              type='submit' 
              value='Agregar estudiante'
              className="bg-[#fb8500] w-full p-2 rounded-md uppercase cursor-pointer" 
              >Agregar Estudiante</button>
            </div>
        </form>
    </div>
  )
}

export default Formulario