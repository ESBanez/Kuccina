import { createSlice } from "@reduxjs/toolkit";

export const mealsSlice = createSlice({
  name: "meals",
  initialState: [],
  reducers: {
    setMeals: (state, action) => {
      console.log(action.payload);
      return action.payload;
    },
    //Everytime ng mag-papasa ng ARGUMENT galing mealGallery.jsx fetchMeals = async binabato rin dito sa reducer
  },
});

export const { setMeals } = mealsSlice.actions;
//const ginamit dahil regular variable siya na naka-destructure
