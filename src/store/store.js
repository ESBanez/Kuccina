//storage ng lahat ng state na gagamitin globally (REDUCER)

import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { mealsSlice } from "./mealsReducer.js";
import { isLoadingSlice } from "./isLoadingReducer.js";
import { favoriteMealsSlice } from "./favoriteMealsReducer.js";

import { persistReducer, persistStore } from 'redux-persist'; //yarn add redux-persis
import storage from "redux-persist/lib/storage"; //default local storage
import thunk from "redux-thunk"


//https://blog.logrocket.com/persist-state-redux-persist-redux-toolkit-react/
const persistConfig = { //Katumbas nito yung session and local storage.
  key: 'root',  //'meals', 'favoriteMeals'
  //pwedeng palitan yung root ng 'meals' kung gusto mong ito lang ang ma save sa local storage

  storage
}



const rootreducer = combineReducers({
  meals: mealsSlice.reducer,
  isLoading: isLoadingSlice.reducer,
  favoriteMeals: favoriteMealsSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootreducer); //Persist the rootreducer

export const store = configureStore({
  // Para magamit to kailangan mag-lagay ng Myprovider sa APP.JSX
  reducer: persistedReducer,
  middleware: [thunk]
});

export const persistor = persistStore(store)