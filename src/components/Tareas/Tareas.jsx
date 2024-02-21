import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { ListaTareas } from "./ListaTareas";
import { OtraListaTareas } from "./OtraListaTareas";

export const Tareas = () => {
    const [tarea, setTarea] = useState("");
    const [tareas, setTareas] = useState(JSON.parse(localStorage.getItem("task"))||[]);
  return (
    <div>
      <div className="container my-5 py-5 d-flex justify-content-center">
        <Form>
          <Form.Group>
            <Form.Label>Ingrese la tarea a agendar</Form.Label>
            <Form.Control type="text" value={tarea} onChange={(e)=>{
                setTarea(e.currentTarget.value)
            }} />
          </Form.Group>
          <Button type="button" variant="primary" className="my-3" onClick={()=>{
            setTareas([...tareas,tarea]);
            setTarea("");
            localStorage.setItem("task",JSON.stringify([...tareas,tarea]))
          }}>
            Guardar tarea
          </Button>
        </Form>
      </div>
      <ListaTareas tareas={tareas} setTareas={setTareas} />
      {/* <OtraListaTareas tareas={tareas} setTareas={setTareas} /> */}
    </div>
  );
};
