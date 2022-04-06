import { useState, useEffect } from 'react';
import Error from './Error'

const Formulario = ({ tareas, setTareas, tarea, setTarea }) => {
    const [meta, setMeta] = useState('');
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const [error, setError] = useState(false)

    useEffect(() => {
        if( Object.keys(tarea).length > 0  ) {
            setMeta(tarea.meta)
            setNombre(tarea.nombre)
            setEmail(tarea.email)
            setFecha(tarea.fecha)
            setDescripcion(tarea.descripcion)
        }
    }, [tarea])


    

    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36)
        return random + fecha
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación del Formulario
        if( [ meta, nombre, email, fecha, descripcion ].includes('') ) {

            setError(true)
            return;
        } 
        
        setError(false)


        // Objeto de Paciente
        const objetoTarea = {
            meta, 
            nombre, 
            email, 
            fecha, 
            descripcion
        }

        if(tarea.id) {
            // Editando el Registro
            objetoTarea.id = tarea.id
            const tareasActualizadas = tareas.map( tareaState => tareaState.id === tarea.id ? objetoTarea : tareaState )

            setTareas(tareasActualizadas)
            setTarea({})

        } else {
            // Nuevo registro
            objetoTarea.id = generarId();
            setTareas([...tareas, objetoTarea]);
        }

        // Reiniciar el form
        setMeta('')
        setNombre('')
        setEmail('')
        setFecha('')
        setDescripcion('')

    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento de actividades</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade tus pendientes y  {''}
                <span className="text-indigo-600 font-bold ">adminístralos</span>
            </p>

            <form 
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
            >
                { error &&  <Error><p>Todos los campos son obligatorios</p></Error>}
                <div className="mb-5">
                    <label htmlFor="meta" className="block text-gray-700 uppercase font-bold">
                        Meta:
                    </label>
                    <input
                        id="meta"
                        type="text"
                        placeholder="Nombre de la meta"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={meta}
                        onChange={ (e) => setMeta(e.target.value) }
                    />  
                </div>

                <div className="mb-5">
                    <label htmlFor="nombre" className="block text-gray-700 uppercase font-bold">
                        Nombre del encargado:
                    </label>
                    <input
                        id="nombre"
                        type="text"
                        placeholder="Nombre del encargado de la tarea"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={nombre}
                        onChange={ (e) => setNombre(e.target.value) }
                    />  
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                        Email:
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="E-mail"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={ (e) => setEmail(e.target.value) }
                    />  
                </div>

                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
                        Fecha:
                    </label>
                    <input
                        id="alta"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={fecha}
                        onChange={ (e) => setFecha(e.target.value) }
                    />  
                </div>

                <div className="mb-5">
                    <label htmlFor="descripcion" className="block text-gray-700 uppercase font-bold">
                        Descripción:
                    </label>
                    <textarea 
                        id="descripcion"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Describe la tarea a realizar"
                        value={descripcion}
                        onChange={ (e) => setDescripcion(e.target.value) }
                    />
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                    value={ tarea.id ? 'Editar Paciente' : 'Agregar Paciente' }
                />
            </form>
        </div>
    )
}

export default Formulario
