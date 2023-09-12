import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function MealInfo() {
  const { id } = useParams();

  const [meal, setMeal] = useState({
    title: "",
    key: "",
    thumbnail: "",
    instructions: "",
    ingredients: [],
  }); //parethesis ({}) because it is an object

  const fetchMeal = async () => {
    const res = await axios(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const mealResult = res.data.meals[0];
    const mealObj = {
      key: mealResult.idMeal,
      title: mealResult.strMeal,
      thumbnail: mealResult.strMealThumb,
      instructions: mealResult.strInstructions,
    };

    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = mealResult[`strIngredient${i}`];
      const measure = mealResult[`strMeasure${i}`];

      if (ingredient) {
        ingredients.push(`${measure} of ${ingredient}`);
      }
    }
    mealObj.ingredients = ingredients;

    setMeal(mealObj);
    console.log(meal); // Log the updated state to immediately see the result wihtout delay unlik the ReactDevTools in Components
  };

  useEffect(() => {
    fetchMeal(); //const fetchMeal is should be under useEffect to avoid multiple
    // call and have an error
  }, []);

  useEffect(() => {
    document.title = `meal - ${meal.title}`;
  }, [meal]); // ["dependency" itong bracket] - each time na mag-babago itong nasa loob
  // iiexecute niya yung code na nasa USE EFFECT

  return (
    <>
      <main className="w-100 d-flex flex-column align-items-center">
        <h4>{meal.title}</h4>
        <div className="d-flex">
          <img src={meal.thumbnail} alt="meal-photo" width="300" />
          <ul>
            {meal.ingredients.map((ingredient, index) => (
              <li key={`ingredient-${index}`}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <pre className="w-50 mt-4" style={{ whiteSpace: "pre-wrap" }}>
          {meal.instructions}
        </pre>
      </main>
    </>
  );
}

export default MealInfo;
