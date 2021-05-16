import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getFliterCategory } from '../../api';
import MealList from '../../components/MealList';
import Preloader from '../../components/preloader/Preloader';
import './Category.css';

function Category() {
  let [meals, setMeals] = useState([]);
  let {name} = useParams();
  let {goBack} = useHistory();

  useEffect(() => {
    getFliterCategory(name).then(data => setMeals(data.meals));
    },
    [name]
  );

  return (
    <div className="wrap">
      {
        !meals.length ? <Preloader /> : <MealList meals={meals} />
      }
      <button className="btnHome" onClick={goBack}>Go Back</button>
    </div>
  );
};

export default Category;