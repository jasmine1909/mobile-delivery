import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
};
export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );
      let newBasket = [...state.items];
      if (index >= 0) {
        //the item exists in the basket/...remove it

        newBasket.splice(index, 1);
      } else {
        console.warn(`can't remove productas it not in the basket`);
      }

      state.items = newBasket;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;
export const selectBasket = (state) => state.basket.items;
export const selectBasketWithId = (state, id) =>
  state.basket.items.filter((item) => item.id === id);
export const selectBasketTotal = (state) =>
  state.basket.items.reduce((total, item) => (total += item.price), 0);

export default basketSlice.reducer;
