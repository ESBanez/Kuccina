import { NavLink } from "react-router-dom"; //Dating {L I N K} lang dahil walang active design kapag onclick
import Kuccina from "../assets/Kuccina.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
      <div className="container-fluid">
        <img
          className="navbar-brand"
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
          className="btn btn-dark"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          Favorites
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
