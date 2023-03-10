import { useState } from "react"
import Cabecera from "./components/Cabecera"
import Formulario from "./components/Formulario"
import Listados from "./components/Listados"


function App() {
  const [estudiantes, setEstudiantes] = useState([]);

  const [estudiante, setEstudiante] = useState({});

  const eliminarEstudiante = (id) => {
    const estudiantesActualizados = estudiantes.filter(estudiante => estudiante.id !== id);
    setEstudiantes(estudiantesActualizados);
  }

  return (
    <>
    <div className="container mx-auto">
      <Cabecera/>
      <div className="mt-12 md:flex gap-4">
        <Formulario
          estudiantes={estudiantes}
          setEstudiantes = {setEstudiantes}
          estudiante = {estudiante}
          setEstudiante={setEstudiante}
        />
        <Listados
          estudiantes={estudiantes}
          setEstudiante={setEstudiante}
          eliminarEstudiante={eliminarEstudiante}
        />
      </div>
    </div>
    </>
  )
}

export default App
