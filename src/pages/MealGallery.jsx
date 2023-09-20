import MealCard from "../components/MealCard";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMeals } from "../store/mealsReducer";
import FilterPanel from "../components/FilterPanel.jsx";
import LoadingSpinner from "../components/LoadingSpinner.jsx";

function MealGallery() {
  const meals = useSelector((state) => state.meals); //state na to galing global state Store/mealsReducer.js
  const isLoading = useSelector((state) => state.isLoading);

  useEffect(() => {
    document.title = "Meal gallery"; //Pagpapalit ng DOC TITLE SA T A A S
  }, []);

  return (
    <>
      <main className="d-flex ps-5">
        <FilterPanel />
        <div className="d-flex flex-wrap w-75 m-3">
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            meals.map((meal) => (
              <MealCard
                key={meal.idMeal}
                id={meal.idMeal}
                title={meal.strMeal}
                thumbnail={meal.strMealThumb}
              />
            ))
          )}
        </div>
      </main>
    </>
  );
}

export default MealGallery;
