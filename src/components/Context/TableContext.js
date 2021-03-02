import React from "react";

export const Context = React.createContext();
export const StateProvider = ({ children }) => {
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [selectedCols, setSelectedCols] = React.useState([]);

  return (
    <Context.Provider
      value={{
        selectedRows,
        setSelectedRows,
        selectedCols,
        setSelectedCols,
      }}
    >
      {children}
    </Context.Provider>
  );
};
