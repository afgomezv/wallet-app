import { useState, createContext } from "react";

export const MoneyContext = createContext();

export const MoneyContextProvider = ({ children }) => {
  const [initialBalance, setInitialBalance] = useState(3000000);

  return (
    <MoneyContext.Provider value={initialBalance}>
      {children}
    </MoneyContext.Provider>
  );
};
