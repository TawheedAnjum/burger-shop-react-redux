import React from 'react';

import IngedientsControll from './ingredientsContorl/IngredientsControl'


const Ingredients = (props) => {
  let transformedIngredients = Object.keys(props.ingredientValue)
    .map((ingKey) => {
      return [...Array(props.ingredientValue[ingKey])].map((_, i) => {
        return <IngedientsControll key={ingKey + i} image={ingKey} />;
      });
    }).reduce((arr, el) => {
      return arr.concat(el);
    }, []);

    return (
      <div className="ingredients">
        <div>
          <IngedientsControll image="top" />
          {transformedIngredients}
          <IngedientsControll image="bottom" />
        </div>
      </div>
    );
}

export default Ingredients;