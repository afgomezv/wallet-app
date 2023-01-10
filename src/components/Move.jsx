import { HiTrash } from "react-icons/hi";
import { FaPencilAlt } from "react-icons/fa";

export const Move = ({ entry, deleteEntry }) => {
  const { id, move, name, quantity } = entry;

  return (
    <li className="d-flex justify-content-between list-group-item">
      <div>
        <HiTrash className="trash" onClick={() => deleteEntry(id)} />
        <FaPencilAlt className="pencilAlt" />
      </div>
      <div className="d-flex justify-content-between align-items-center w-75">
        <div>
          <p className="align-middle">{name}</p>
        </div>
        <div className="w-25">
          <span
            className={`w-100 ${
              move === "ingreso"
                ? "badge text-bg-success"
                : "badge text-bg-danger"
            }`}
          >
            $ {quantity}
          </span>
        </div>
      </div>
    </li>
  );
};
