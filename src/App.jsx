import { Register } from "./components/Register";
import { Topnavar } from "./components/Topnavar";
import { MoneyContextProvider } from "./contexts/MoneyContext";

export const App = () => {
  return (
    <div>
      <MoneyContextProvider>
        <Topnavar />
        <div className="container">
          <Register />
        </div>
      </MoneyContextProvider>
    </div>
  );
};
