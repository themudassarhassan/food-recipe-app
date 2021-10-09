import { RecipeTile } from './';

export function RecipeList({ recipes }) {
  return (
    <main className="grid grid-cols-1 px-6 md:grid-cols-2 md:px-12 lg:grid-cols-3 lg:px-28 pt-10 gap-7">
      {recipes.map(recipe => (
        <RecipeTile key={recipe.uri} recipe={recipe} />
      ))}
    </main>
  );
}
