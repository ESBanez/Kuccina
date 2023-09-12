//storage ng lahat ng state na gagamitin globally (REDUCER)

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { mealsSlice } from "./mealsReducer.js";
import { isLoadingSlice } from "./isLoadingReducer.js";

const rootreducer = combineReducers({
  meals: mealsSlice.reducer,
  isLoading: isLoadingSlice.reducer,
});

const store = configureStore({
  // Para magamit to kailangan mag-lagay ng Myprovider sa APP.JSX
  reducer: rootreducer,
});

export default store;
