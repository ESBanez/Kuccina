import { createSlice } from "@reduxjs/toolkit";

export const favoriteMealsSlice = createSlice({
  name: "favoriteMeals",
  initialState: [], //Array of object dahil list siya ng fav, kailangan ng TiTLE and ID
  reducers: {
    addToFavoriteMeals: (state, action) => {
      const newState = [...state];
      newState.push(action.payload);

      console.log("add to favorites mother fucker", newState);

      return newState;
    },

    removeToFavoriteMeals: (state, action) => {
      const newState = [...state];

      const index = newState.findIndex((item) => item.id === action.payload);

      if (index !== -1) {
        newState.splice(index, 1);
      }

      console.log("I removed your ass MF!", newState);

      return newState;
    },
  },
});

export const { addToFavoriteMeals, removeToFavoriteMeals } =
  favoriteMealsSlice.actions;
