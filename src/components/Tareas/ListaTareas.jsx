import React from "react";
import Button from "react-bootstrap/Button";
export const ListaTareas = ({ tareas,setTareas }) => {
    const eliminarTarea = (index)=>{
        let nuevaTarea = [...tareas];
        nuevaTarea.splice(index,1);
        setTareas(nuevaTarea)
        localStorage.setItem("task",JSON.stringify(nuevaTarea))
    }
  return (
    <div>
      <div className="container">
        <div className="d-flex justify-content-between my-3 py-2">
          <h3>Lista de tareas</h3>
          <Button
            type="button"
            variant="danger"
            onClick={() => {
              setTareas([])
              localStorage.setItem("task",JSON.stringify([]))
            }}
          >
            Eliminar todas las tareas
          </Button>
        </div>
        <ol>
          {tareas.map((itemTarea, index) => {
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
