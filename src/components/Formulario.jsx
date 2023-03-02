// import '../styles/formularioStyle.css'

const Formulario = () => {
  return (
    <div className=''>
        <body>          
        <h1>Formulario</h1>
        <form> 
            <label htmlFor="">Nombre: </label>
            <input type="text" />
            <label htmlFor="">Apellido: </label>
            <input type="text" />
            <label htmlFor="">Correo: </label>
            <input type="email" />
            <label htmlFor="">Numero: </label>
            <input type="text" />
            <div>
                <dir>
                    <button type='submit' className="bg-[#fb8500] w-full rounded-md p-2 uppercase" value='Agregar estudiante'>enviar</button>
                </dir>
            </div>
        </form>
        </body>
    </div>
  )
}

export default Formulario