import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getMealById } from '../../api';
import Preloader from '../../components/preloader/Preloader';
import './Recipe.css';

function Recipe() {
  let {id} = useParams();
  let [recipe, setRecipe] = useState({});
  let {goBack} = useHistory();

  useEffect(() => {
      getMealById(id).then((data) => setRecipe(data.meals[0]));
    },
    [id]
  );

  return (
    <div className="wrap">
      {
        !recipe.idMeal ? (<Preloader />) : (
          <div className="recipe">
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <h1>{recipe.strMeal}</h1>
            <div>Category: <h5>{recipe.strCategory}</h5></div>
            {recipe.strArea ? <div>Area: <h5>{recipe.strArea}</h5></div> : null}
            <p>{recipe.strInstruction}</p>
          </div>
        )
      }
      <button className="btn" onClick={goBack}>Go Back</button>
    </div>
  );
};

export default Recipe;
