import { createContext, useState, useContext } from "react";

export const AddedToCartContext = createContext({
  cartAdded: true,
  setCartAdded: () => {},
});

export const AddedToCartProvider = ({ children }) => {
  const [cartAdded, setCartAdded] = useState(false);

  return (
    <AddedToCartContext.Provider value={{ cartAdded, setCartAdded }}>
      {children}
    </AddedToCartContext.Provider>
  );
};

export const useAddToCartContext = () => {
  return useContext(AddedToCartContext);
};
