import { useSelector } from "react-redux";
import FavoriteListItem from "./FavoriteListItem.jsx";

function FavoriteMealsOffcanvas() {
  const favoriteMeals = useSelector((state) => state.favoriteMeals);

  return (
    <>
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">Favorite Meals</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            id="closeFavoriteOffcanvas"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="list-group list-group-flush">
            {favoriteMeals.map((meal) => (
              <FavoriteListItem
                key={`favorite-meal-${meal.id}`}
                id={meal.id}
                title={meal.title}
                thumbnail={meal.thumbnail}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default FavoriteMealsOffcanvas;
