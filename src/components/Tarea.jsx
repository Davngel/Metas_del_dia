const Tarea = ({tarea, setTarea, eliminarTarea}) => {

    const { meta, nombre, email, fecha, descripcion, id } = tarea

    const handleEliminar = () => {
        const respuesta = confirm('¿Deseas finalizar la tarea?')
        if(respuesta) {
            eliminarTarea(id)
        }
    }


  return (
    <div className="my-15 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Meta del día:  {''}
            <span className="font-normal normal-case">{meta}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre del encargado: 
            <span className="font-normal normal-case">{nombre}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Correo electrónico: 
            <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha: 
            <span className="font-normal normal-case">{fecha}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Descripción: 
            <span className="font-normal normal-case">{descripcion}</span>
        </p>   
        <div className="flex justify-between mt-10">
            <button
                type="button"
                className="py-2 px-10 bg-blue-800 hover:bg-blue-800 text-white font-bold uppercase rounded-lg"
                onClick={() => setTarea(tarea)}
            >Editar</button>
            <button
                type="button"
                className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                onClick={handleEliminar}
            >Finalizar</button>
            
        </div>         

        </div>
  )
}

export default Tarea