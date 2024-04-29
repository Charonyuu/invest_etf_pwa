import React, { createContext, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [search, setSearch] = useState("");
  const [star, setStar] = useState(false);
  const [sort, setSort] = useState("");
  const [storedStock, setStoredStock] = useLocalStorage("storedStock");
  function handleClickStar(stock) {
    if (storedStock.includes(stock)) {
      setStoredStock(storedStock.filter((item) => item !== stock));
    } else {
      setStoredStock([...storedStock, stock]);
    }
  }
  function handleSort() {
    if (sort === "asc") {
      setSort("desc");
    } else if (sort === "desc") {
      setSort("");
    } else {
      setSort("asc");
    }
  }
  function handleToggleStar() {
    setStar(!star);
  }

  return (
    <AppContext.Provider
      value={{
        search,
        setSearch,
        storedStock,
        handleClickStar,
        star,
        handleToggleStar,
        sort,
        handleSort,
      }}
    >
      <div className="px-4">{children}</div>
    </AppContext.Provider>
  );
}
