import { ListMove } from "./components/ListMove";
import { Register } from "./components/Register";
import { Topnavar } from "./components/Topnavar";
import { MoneyContextProvider } from "./contexts/MoneyContext";

export const App = () => {
  return (
    <div>
      <MoneyContextProvider>
        <Topnavar />
        <div className="d-flex">
          <Register />
          <ListMove />
        </div>
      </MoneyContextProvider>
    </div>
  );
};
