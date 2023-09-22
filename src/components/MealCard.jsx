import { Link } from "react-router-dom";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavoriteMeals,
  removeToFavoriteMeals,
} from "../store/favoriteMealsReducer.js";

function MealCard(props) {
  const dispatch = useDispatch();
  const favoriteMeals = useSelector((state) => state.favoriteMeals);
  const { id, title, thumbnail } = props;
  const [isFavorite, setIsFavorite] = useState(false);

  // Function to toggle the favorite state
  const toggleFavorite = () => {
    if (!isFavorite) {
      dispatch(addToFavoriteMeals({ id, title, thumbnail }));
    } else {
      dispatch(removeToFavoriteMeals(id));
    }
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    const index = favoriteMeals.findIndex((item) => item.id === id);
    setIsFavorite(index !== -1);
  }, [favoriteMeals]);

  return (
    <>
      <div className="card m-1 p-1" style={{ width: "18rem" }}>
        <img src={thumbnail} className="card-img-top" alt="..." />
        <div className="card-body">
          <div className="d-flex align-items-baseline">
            <h5 className="card-title">{title}</h5>
            <button className="btn btn-link text-dark" onClick={toggleFavorite}>
              <FontAwesomeIcon
                icon={isFavorite ? faHeartSolid : faHeartRegular}
              />
            </button>
          </div>
          <Link to={`/meal/${id}`} className="btn btn-dark">
            {" "}
            View Full Recipe
          </Link>
        </div>
      </div>
    </>
  );
}



export default MealCard;
