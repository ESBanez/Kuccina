import { createSlice } from "@reduxjs/toolkit";

export const isLoadingSlice = createSlice({
  name: "isLoading ",
  initialState: false,
  reducers: {
    markLoading: () => {
      return true;
    },

    unmarkLoading: () => {
      return false;
    },

    //Everytime ng mag-papasa ng ARGUMENT galing mealGallery.jsx fetchMeals = async binabato rin dito sa reducer
  },
});

export const { markLoading, unmarkLoading } = isLoadingSlice.actions;
