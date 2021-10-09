import React from 'react';
import { useParams } from 'react-router-dom';
import { IngredientTile } from './';
import { getRecipeDetails } from '../api/recipes';


export function RecipeDetails(props) {
  const { recipeId } = useParams();
  const [recipeDetail, setRecipeDetail] = React.useState({});

  React.useEffect(() => {
    getRecipeDetails(recipeId).then(response => {
      setRecipeDetail(response.data.recipe);
    });
  }, [recipeId]);

  // need to add loading view
  return (
    <main className="flex flex-col md:flex-row px-6 md:px-12 pt-10 lg:px-28">
      <div>
        <img alt="recipe" src={recipeDetail.image} />
        <div>{recipeDetail.label}</div>
        <div>{recipeDetail.source}</div>
      </div>
      <div className="md:ml-32">
        <div className="uppercase text-2xl">Ingredients</div>
        {recipeDetail.ingredients?.map(ingr => (
          <IngredientTile {...ingr} />
        ))}
      </div>
    </main>
  );
}
