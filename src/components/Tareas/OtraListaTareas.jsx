import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
export const OtraListaTareas = ({ tareas,setTareas }) => {
    const [task, setTask] = useState([]);
    useEffect(() => {
      console.log("Haciendo efecto")
      console.log(task)
      setTask(tareas)
    }, [tareas])
    
    const eliminarTarea = (index)=>{
        let nuevaTarea = task;
        nuevaTarea.splice(index,1);
        setTareas([...nuevaTarea])
    }
  return (
    <div>
      <div className="container">
        <div className="d-flex justify-content-between my-3 py-2">
          <h3>Otra Lista de tareas</h3>
          <Button
            type="button"
            variant="danger"
            onClick={() => {
              setTareas([])
            }}
          >
            Eliminar todas las tareas
          </Button>
        </div>
        <ol>
          {task.map((itemTarea, index) => {
            return (
            <div key={index} className="my-2">
                <li>
                    <div className="d-flex justify-content-between">
                        <p>Tarea: {itemTarea}</p>
                        <Button type="button" variant="warning" onClick={()=>{
                            // const eliminarTareaX = tareas.filter((el)=>{
                            //     return el !== itemTarea;
                            // }) 
                            // setTareas(eliminarTareaX)
                            eliminarTarea(index)
                        }}>
                            Eliminar Tarea
                        </Button>
                    </div>
                </li>
            </div>
            )
            // return <li key={index}>Tarea: {itemTarea}</li>;
          })}
        </ol>
      </div>
    </div>
  );
};
