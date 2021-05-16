import { Link } from "react-router-dom";


function Meal(props) {
  let {strMeal, strMealThumb, idMeal} = props;

  return (
    <div className="card">
      <img src={strMealThumb} alt={strMeal} />
      <h2>{strMeal}</h2>
      <div className="card-action">
        <Link to={`/meal/${idMeal}`}>Watch Recipe</Link>
      </div>
    </div>
  );
};

export default Meal;
