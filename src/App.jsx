import { useEffect, useState } from "react"
import Cabecera from "./components/Cabecera"
import Formulario from "./components/Formulario"
import Listados from "./components/Listados"


function App() {
  const [estudiantes, setEstudiantes] = useState([]);

  const [estudiante, setEstudiante] = useState({});
  return (
    <>
    <div className="container mx-auto">
      <Cabecera/>
      <div className="mt-12 md:flex gap-4">
        <Formulario
          estudiantes={estudiantes}
          setEstudiantes = {setEstudiantes}
          estudiante = {estudiante}
        />
        <Listados
          estudiantes={estudiantes}
          setEstudiante={setEstudiante}
        />
      </div>
    </div>
    </>
  )
}

export default App
