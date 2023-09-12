import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setMeals } from "../store/mealsReducer";
import { markLoading, unmarkLoading } from "../store/isLoadingReducer.js"; // Import markLoading and unmarkLoading

function FilterPanel() {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();

  const fetchCategories = async () => {
    const res = await axios(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    const categoriesResult = res.data.categories.map(
      (category) => category.strCategory
    );
    setCategories(categoriesResult);
  };

  useEffect(() => {
    dispatch(markLoading());
    fetchCategories();
  }, []);

  //   P A R A  M A P A G A N A  Y U N G "AWAIT" kailangan ng ASYNC
  const handleRadioChange = async (e) => {
    const res =
      await axios(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${e.target.id}
    `);
    dispatch(setMeals(res.data.meals));
    dispatch(unmarkLoading()); //R E D U C E R

    console.log(res.data.meals);
  };

  return (
    <>
      <div
        className="border d-flex flex-column w-25 p-3 m-3"
        style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)" }}
      >
        <h4>Categories</h4>
        <ul className="list-group list-group-flush">
          {/* list-group list-group-flush removes <ul> dot design */}
          {categories.map((category, index) => (
            <li key={`category-${index}`} className="list-group-item">
              <input
                className="me-3"
                type="radio"
                name="categories"
                id={category}
                onChange={handleRadioChange}
              />
              <label htmlFor={category}>{category}</label>{" "}
              {/* Corrected htmlFor */}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default FilterPanel;
