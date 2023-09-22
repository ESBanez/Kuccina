import MealCard from "../components/MealCard";
import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMeals } from "../store/mealsReducer";
import FilterPanel from "../components/FilterPanel.jsx";
import LoadingSpinner from "../components/LoadingSpinner.jsx";
import { markLoading, unmarkLoading } from "../store/isLoadingReducer.js"; // Import markLoading and unmarkLoading

function MealGallery() {
  const dispatch = useDispatch();
  const meals = useSelector((state) => state.meals); //state na to galing global state Store/mealsReducer.js
  const isLoading = useSelector((state) => state.isLoading);

  const fetchMeals = async () => {
    const res = await axios(
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );
    //global variable Reducer using D I S P A T C H!
    dispatch(setMeals(res.data.meals));
    dispatch(unmarkLoading()); // U N M A R K   L O A D I N G pag-katapos
  };

  useEffect(() => {
    document.title = "Meal gallery"; //Pagpapalit ng DOC TITLE SA T A A S
    dispatch(markLoading()); //L O A D I N G bago ifetch yung meals
    fetchMeals();
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
                key={meal.idMeal} // Ensure that 'meal.idMeal' is unique for each meal
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
