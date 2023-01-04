import { FcMoneyTransfer } from "react-icons/fc";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

import { useContext } from "react";
import { MoneyContext } from "../contexts/MoneyContext";

import "../styles/Topnavar.scss";

export const Topnavar = () => {
  const initialBalance = useContext(MoneyContext);

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <div className="navbar__img">
          <FcMoneyTransfer />
        </div>
        <div className="navbar__name">Wallet App</div>
      </div>
      <div>
        <form className="form">
          <div className="form__container">
            <label className="form__label">Saldo Inicial: </label>
            <div className="form__input">
              <div className="form__logo">
                <RiMoneyDollarCircleFill />
              </div>
              <input
                className="input"
                type="text"
                name="intialbalance"
                value={initialBalance}
              />
            </div>
          </div>
          <div className="form__container">
            <label className="form__label">Saldo Final: </label>
            <div className="form__input">
              <div className="form__logo">
                <RiMoneyDollarCircleFill />
              </div>
              <input
                className="input"
                type="text"
                name="finalbalance"
                value={0}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
