import { useState, createContext } from "react";

export const MoneyContext = createContext();

const intialEntries = [
  {
    id: 1,
    move: "ingreso",
    name: "Trabajo extra",
    quantity: 150000,
  },
  {
    id: 2,
    move: "gasto",
    name: "Regalo mama",
    quantity: 180000,
  },
  {
    id: 3,
    move: "gasto",
    name: "Almuerzo",
    quantity: 12000,
  },
];

export const MoneyContextProvider = ({ children }) => {
  const [initialBalance, setInitialBalance] = useState(3000000);
  const [entries, setEntries] = useState(intialEntries);

  const addEntry = (entry) => {
    setEntries([...entries, entry]);
  };

  const deleteEntry = (id) => {
    const newEntry = entries.filter((entry) => entry.id !== id);
    setEntries(newEntry);
  };

  const updateEntry = (id) => {};

  return (
    <MoneyContext.Provider
      value={{
        initialBalance,
        setInitialBalance,
        entries,
        setEntries,
        addEntry,
        deleteEntry,
      }}
    >
      {children}
    </MoneyContext.Provider>
  );
};
