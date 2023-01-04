import "../styles/Register.scss";

export const Register = () => {
  return (
    <div>
      <h3>Registro</h3>
      <form className="formContainer">
        <section className="formContainer__select">
          <label className="formContainer__text">Tipo Movimiento: </label>
          <div>
            <select name="" id="">
              <option value="ingreso">Ingreso</option>
              <option value="gasto">Gasto</option>
            </select>
          </div>
        </section>
        <section className="formContainer__input">
          <label className="formContainer__text">Nombre: </label>
          <div>
            <input type="text" name="name" />
          </div>
        </section>
        <section className="formContainer__input">
          <label className="formConataoner__text">Cantidad: </label>
          <div>
            <input type="number" name="name" />
          </div>
        </section>
      </form>
    </div>
  );
};
