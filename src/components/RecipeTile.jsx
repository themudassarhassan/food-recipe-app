import { Link } from "react-router-dom";

export function RecipeTile({ recipe }) {
  const recipeId = recipe.uri.split('#')[1];
  return (
    <div className="shadow-lg rounded">
      <img className="w-full h-3/4 rounded" alt="recipe" src={recipe.image} />
      <div className="p-3 text-gray-900">{recipe.label}</div>
      <div className="flex justify-between items-center	px-3">
        <div className="text-gray-500">{recipe.source}</div>
        <Link
          className="border-indigo-500 border-2 rounded px-4 py-2"
          type="button"
          to={`/recipe/${recipeId}`}
        >
          View Recipe
        </Link>
      </div>
    </div>
  );
}
