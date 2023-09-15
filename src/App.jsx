import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MealGallery from "./pages/MealGallery";
import MealInfo from "./pages/MealInfo";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import { Provider } from "react-redux";
import store from "./store/store.js";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            {/* IMPORTANT yung     O R D E R     ng  Route */}
            <Route path="/" element={<Home />} />
            <Route path="/meal-gallery" element={<MealGallery />} />
            <Route path="/meal/:id" element={<MealInfo />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;