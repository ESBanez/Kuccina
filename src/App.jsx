import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MealGallery from "./pages/MealGallery";
import MealInfo from "./pages/MealInfo";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import { Provider } from "react-redux";

import { store, persistor } from "./store/store.js";
 //naka-destructe yung store kasi di na siya naka export default

import FavoriteMealsOffcanvas from "./components/FavoriteMealsOffcanvas";
import FavoriteListItem from "./components/FavoriteListItem";
import {PersistGate} from 'redux-persist/integration/react'



function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
           {/* galing store for Local storage  */}


          <BrowserRouter>
            {/* kahit saan ito ilagay basta nasa loob  */}
            <FavoriteMealsOffcanvas />

            <Navbar />

            <Routes>
              {/* IMPORTANT yung     O R D E R     ng  Route */}
              <Route path="/" element={<Home />} />
              <Route path="/meal-gallery" element={<MealGallery />} />
              <Route path="/meal/:id" element={<MealInfo />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
