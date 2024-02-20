import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

export const Tareas = () => {
    const [tarea, setTarea] = useState("");
    const [tareas, setTareas] = useState([]);
  return (
    <div>
      <div className="container my-5 py-5 d-flex justify-content-center">
        <Form>
          <Form.Group>
            <Form.Label>Ingrese la tarea a agendar</Form.Label>
            <Form.Control type="text" onChange={(e)=>{
                setTarea(e.currentTarget.value)
            }} />
          </Form.Group>
          <Button type="button" variant="primary" className="my-3" onClick={()=>{
            setTareas([...tareas,tarea])
          }}>
            Guardar tarea
          </Button>
        </Form>
      </div>
      <div className="container">
        <ol>
            {
                tareas.map((itemTarea, index)=>{
                    return (
                        <li key={index}>Tarea: {itemTarea}</li>
                    )
                })
            }
        </ol>
      </div>
    </div>
  );
};
