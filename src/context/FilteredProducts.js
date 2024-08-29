import { createContext, useState, useContext } from "react";

export const FilterContext = createContext({
  filter: "",
  setfilter: () => {},
});

export const FilterProvider = ({ children }) => {
  const [filter, setfilter] = useState("");

  return (
    <FilterContext.Provider value={{ filter ,  setfilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
