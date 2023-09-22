import { createSlice } from "@reduxjs/toolkit";

export const isLoadingSlice = createSlice({
  name: "isLoading ",
  initialState: false,
  reducers: {
    markLoading: () => {
      console.trace("Mark loading")
      return true;
    },

    unmarkLoading: () => {
      console.trace("Unmark loading")
      return false;
    },

    //Everytime ng mag-papasa ng ARGUMENT galing mealGallery.jsx fetchMeals = async binabato rin dito sa reducer
  },
});

export const { markLoading, unmarkLoading } = isLoadingSlice.actions;
