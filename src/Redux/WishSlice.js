import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlistProducts:
    localStorage.getItem("wishlistProducts") === null
      ? []
      : JSON.parse(localStorage.getItem("wishlistProducts")),
  wishlistProductsID:
    localStorage.getItem("wishlistProductsID") === null
      ? []
      : JSON.parse(localStorage.getItem("wishlistProductsID")),
};


export const wishSlice = createSlice({
name: "wish",
initialState,
reducers: {
    addToWishList: (state,action) => {
        const product = {...action.payload};
        state.wishlistProducts.push(product);
        state.wishlistProductsID.push(product.id);

        localStorage.setItem("wishlistProducts",JSON.stringify(state.wishlistProducts));
        localStorage.setItem("wishlistProductsID",JSON.stringify(state.wishlistProductsID))
    },
    removeFromWishList: (state,action) => {
            const {id} = action.payload;
            const index = state.wishlistProducts.findIndex((product)=>product.id === id)


            state.wishlistProducts.splice(index, 1);
            state.wishlistProductsID.splice(index, 1);

            localStorage.setItem(
                "wishlistProducts",
                JSON.stringify(state.wishlistProducts)
              );
              localStorage.setItem(
                "wishlistProductsID",
                JSON.stringify(state.wishlistProductsID)
              );
    }
    
}
})

export const { addToWishList, removeFromWishList } =
wishSlice.actions;

export default wishSlice.reducer;
