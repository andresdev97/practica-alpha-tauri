import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../scss/components/Form.scss";

export default function Form() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
  };

  const notify = () => toast.success("Mensaje enviado con éxito!");

  return (
    <div className="form-container">
      <h1>Contáctanos</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Ingrese su nombre"
          className="form-control"
          name="name"
          ref={register({
            required: {
              value: true,
              message: "Nombre requerido",
            },
          })}
        ></input>
        <input
          placeholder="Ingrese su apellido"
          className="form-control"
          name="lastname"
          ref={register({
            required: {
              value: true,
              message: "Apellido requerido",
            },
          })}
        ></input>
        <textarea
          placeholder="Ingrese el mensaje"
          className="form-control"
          name="message"
          ref={register({
            required: {
              value: true,
              message: "El mensaje no puede estar vacío",
            },
          })}
        ></textarea>
        <button type="submit" className="btn btn-primary" onClick={notify}>
          Enviar
        </button>
        <ToastContainer 
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable/>
      </form>
    </div>
  );
}
