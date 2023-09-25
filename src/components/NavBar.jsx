import { NavLink } from "react-router-dom"; //Dating {L I N K} lang dahil walang active design kapag onclick
import Kuccina from "../assets/Kuccina.png";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setMeals } from "../store/mealsReducer";
import { unmarkLoading, markLoading } from "../store/isLoadingReducer.js";
import { useEffect } from "react";



function Navbar() {
  const dispatch = useDispatch();

  const fetchMeals = async () => {
    const res = await axios(
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );
    dispatch(setMeals(res.data.meals));
    dispatch(unmarkLoading());
  };
  useEffect(() => {
    // document.title = "Meal gallery"; //Pagpapalit ng DOC TITLE SA T A A S
    dispatch(markLoading()); //L O A D I N G bago ifetch yung meals
    fetchMeals();
  }, []);

  
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
      <div className="container-fluid">
        <img
          className="navbar-brand mx-5"
          src={Kuccina}
          alt="Kuccina-Logo"
          style={{ width: "10rem", height: "10rem" }}
        />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-5">
            {" "}
            {/* Use ml-auto to push links to the right */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/meal-gallery">
                Meal Gallery
              </NavLink>
            </li>
          </ul>
        </div>
        <button
          className="btn btn-outline-dark  mx-4"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <FontAwesomeIcon icon={faHeart} /> Favorites
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
