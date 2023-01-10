export const UpdateMove = () => {
  return (
    <div className="w-50 mt-4 ms-3">
      <form className="p-3 border rounded">
        <h4>Editar Movimiento</h4>
        <div className="form-floating">
          <select className="form-select">
            <option value="ingreso">Ingreso</option>
            <option value="gasto">Gasto</option>
          </select>
          <label htmlFor="floatingInput">Tipo de Movimiento: </label>
        </div>
        <div className="form-floating mt-3 mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Nombre: </label>
        </div>
        <div className="form-floating">
          <input
            type="number"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Cantidad: </label>
        </div>
        <div className="d-flex justify-content-center m-4">
          <button type="button" className="btn btn-danger m-2 ">
            Cerrar
          </button>
          <button type="button" className="btn btn-success m-2">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};
