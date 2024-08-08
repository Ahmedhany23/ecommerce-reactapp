import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProducts:
    localStorage.getItem("selectedProducts") === null
      ? []
      : JSON.parse(localStorage.getItem("selectedProducts")),
  selectedProductsID:
    localStorage.getItem("selectedProductsID") === null
      ? []
      : JSON.parse(localStorage.getItem("selectedProductsID")),
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productWithQuantity = { ...action.payload, quantity: 1 };
      state.selectedProducts.push(productWithQuantity);
      state.selectedProductsID.push(productWithQuantity.id);
      localStorage.setItem(
        "selectedProducts",
        JSON.stringify(state.selectedProducts)
      );
      localStorage.setItem(
        "selectedProductsID",
        JSON.stringify(state.selectedProductsID)
      );
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const index = state.selectedProducts.findIndex(
        (product) => product.id === id
      );
      
      if (quantity < 1) {
        state.selectedProducts.splice(index, 1);
        state.selectedProductsID.splice(index, 1);
      } else {
        state.selectedProducts[index].quantity = quantity;
      }

      // Update local storage
      localStorage.setItem(
        "selectedProducts",
        JSON.stringify(state.selectedProducts)
      );
      localStorage.setItem(
        "selectedProductsID",
        JSON.stringify(state.selectedProductsID)
      );
    },
    removeData: (state, action) => {
      state.selectedProducts = [];
      state.selectedProductsID = [];
      // Update local storage
      localStorage.setItem(
        "selectedProducts",
        JSON.stringify(state.selectedProducts)
      );
      localStorage.setItem(
        "selectedProductsID",
        JSON.stringify(state.selectedProductsID)
      );
    },
  },
});

export const { addToCart, updateQuantity ,removeData } =
cartSlice.actions;

export default cartSlice.reducer;
