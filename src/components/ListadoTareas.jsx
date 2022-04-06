import Tarea from "./Tarea"

const ListadoTareas = ({tareas, setTarea, eliminarTarea}) => {
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

            {tareas && tareas.length ? (
                <>
                    <h2 className="font-black text-3xl text-center px-3 py-4">Listado de tareas</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Cumple tus {''}
                        <span className="text-blue-800 font-bold ">objetivos</span>
                    </p>

                    { tareas.map( tarea => (
                        <Tarea 
                            key={tarea.id}
                            tarea={tarea}
                            setTarea={setTarea}
                            eliminarTarea={eliminarTarea}
                        />
                    ))}
                </>

            ) : (
                <>
                    <h2 className="font-black mt-2 text-3xl text-center">No hay registros</h2>
                    <p className="text-xl mt-8 text-center">
                        Agrega tareas {''}
                        <span className="text-indigo-600 font-bold ">para enlistar los pendientes</span>
                    </p>
                </>
            )}
        </div>
    )
}

export default ListadoTareas
