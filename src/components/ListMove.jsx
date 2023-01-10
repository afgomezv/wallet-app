import { useContext } from "react";
import { MoneyContext } from "../contexts/MoneyContext";
import { Move } from "./Move";

export const ListMove = () => {
  const { entries, deleteEntry } = useContext(MoneyContext);
  return (
    <div className="w-50 mt-4 ms-3 me-3">
      <div className="p-3 border rounded">
        <div className="position-relative">
          <h4>Lista de movimientos</h4>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {entries.length}
          </span>
        </div>
        <div className="d-flex">
          <div className="form-floating mb-3 w-50 me-2">
            <input type="text" className="form-control" />
            <label htmlFor="floatingInput">Buscar</label>
          </div>
          <div className="form-check me-2">
            <input
              className="form-check-input"
              type="radio"
              name="todos"
              id="check-todos"
            />
            <label className="form-check-label" htmlFor="check-todos">
              Todos
            </label>
          </div>
          <div className="form-check me-2">
            <input
              className="form-check-input"
              type="radio"
              name="ingreso"
              id="check-ingreso"
            />
            <label className="form-check-label" htmlFor="check-ingreso">
              Ingreso
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gasto"
              id="check-gasto"
            />
            <label className="form-check-label" htmlFor="check-gasto">
              Gasto
            </label>
          </div>
        </div>
        <div>
          <ul className="list-group">
            {entries.map((entry) => (
              <Move key={entry.id} entry={entry} deleteEntry={deleteEntry} />
            ))}
            {entries.length === 0 && (
              <li className="list-group-item text-center">
                No hay movimientos
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
