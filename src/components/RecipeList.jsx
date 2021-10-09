import { RecipeTile } from "./";
import { useQuery } from "react-query";
import { getRecipes } from "../api/recipes";

export function RecipeList({ searchText }) {
  const { data: recipes, isLoading } = useQuery(
    ["recipes", searchText],
    async () => {
      const response = await getRecipes(searchText);
      return response.data.hits.map(hit => ({ ...hit.recipe }));
    }
  );

  if (isLoading) return <div>Loading....</div>;

  return (
    <main className="grid grid-cols-1 px-6 md:grid-cols-2 md:px-12 lg:grid-cols-3 lg:px-28 pt-10 gap-7">
      {recipes.map(recipe => (
        <RecipeTile key={recipe.uri} recipe={recipe} />
      ))}
    </main>
  );
}
