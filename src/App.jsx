import React from "react";
import { Switch, Route } from "react-router-dom";
import { getRecipes } from "./api/recipes";
import { RecipeList, RecipeDetails, Header } from "./components";

function App() {
  const [recipes, setRecipes] = React.useState([]);
  const [searchText, setSearchText] = React.useState("taco");

  React.useEffect(() => {
    if (searchText) {
      getRecipes(searchText).then(response => {
        const recipesData = response.data.hits.map(hit => ({ ...hit.recipe }));
        setRecipes(recipesData);
      });
    }
  }, [searchText]);

  const handleSearchTextChange = event => {
    event.preventDefault();
    setSearchText(event.target.searchInput.value);
  };

  return (
    <div>
      <Header
        searchText={searchText}
        onSearchTextChange={handleSearchTextChange}
      />
      <Switch>
        <Route exact path="/">
          <RecipeList recipes={recipes} />
        </Route>
        <Route path="/recipe/:recipeId" component={RecipeDetails}/>
      </Switch>
    </div>
  );
}

export default App;
