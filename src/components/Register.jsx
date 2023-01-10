import { useState, useContext } from "react";
import { MoneyContext } from "../contexts/MoneyContext";
import Swal from "sweetalert2";

export const Register = () => {
  const { addEntry } = useContext(MoneyContext);
  const [form, setForm] = useState({
    move: "ingreso",
    name: "",
    quantity: "",
  });

  const { move, name, quantity } = form;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !quantity.trim()) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Nombre y Cantidad obligatorios",
      });
      return;
    }

    addEntry({
      id: Date.now(),
      ...form,
    });

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Agregado Correctamente",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-50 mt-4 ms-3">
      <form className="p-3 border rounded" onSubmit={handleSubmit}>
        <h4>Registro</h4>
        <div className="form-floating">
          <select
            className="form-select"
            name="move"
            value={move}
            onChange={handleChange}
          >
            <option value="ingreso">Ingreso</option>
            <option value="gasto">Gasto</option>
          </select>
          <label htmlFor="floatingInput">Tipo de Movimiento: </label>
        </div>
        <div className="form-floating mt-3 mb-3">
          <input
            type="text"
            className="form-control"
            name="name"
            value={name}
            onChange={handleChange}
          />
          <label htmlFor="floatingInput">Nombre: </label>
        </div>
        <div className="form-floating">
          <input
            type="number"
            className="form-control"
            name="quantity"
            value={quantity}
            onChange={handleChange}
          />
          <label htmlFor="floatingPassword">Cantidad: </label>
        </div>
        <div className="d-flex justify-content-center m-4">
          <button type="button" className="btn btn-danger m-2 ">
            Cancelar
          </button>
          <button
            type="button"
            className="btn btn-success m-2"
            onClick={handleSubmit}
          >
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
};
