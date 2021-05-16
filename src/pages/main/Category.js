import { useState, useEffect } from "react";
import { getFliterCategory } from "../../api";
import { useParams, useHistory } from "react-router-dom";
import Preloader from "../../components/preloader/Preloader";
import MealList from "../../components/MealList";
import './Category.css';

function Category() {
  let { name } = useParams();

  let [meals, setMeals] = useState([]);

  let {goBack} = useHistory();

  useEffect(() => {
    getFliterCategory(name).then((data) => setMeals(data.meals));
  }, [name]);

  return (
    <div className="wrap">
      {!meals.length ? <Preloader /> : <MealList meals={meals} />}
      <button className="btnHome" onClick={goBack}>Comback</button>
    </div>
  );
}

export default Category;