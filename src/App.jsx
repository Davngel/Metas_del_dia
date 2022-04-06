import { useState, useEffect } from 'react'
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoTareas from "./components/ListadoTareas"

function App() {

  const [tareas, setTareas] = useState([]);
  const [tarea, setTarea] = useState({});

  useEffect(() => {
    const obtenerLS = () => {
      const tareasLS = JSON.parse(localStorage.getItem('tareas')) ?? [];
      setTareas(tareasLS)
    }
    obtenerLS();
  }, []);

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify( tareas ));
  }, [tareas])

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter( tarea => tarea.id !== id);
    setTareas(tareasActualizadas)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
          <Formulario 
            tareas={tareas}
            setTareas={setTareas}
            tarea={tarea}
            setTarea={setTarea}
          />
          <ListadoTareas 
            tareas={tareas}
            setTarea={setTarea}
            eliminarTarea={eliminarTarea}
          />
      </div>

    </div>
  )
}

export default App
