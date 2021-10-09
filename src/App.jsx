import React from "react";
import { Switch, Route } from "react-router-dom";
import { RecipeList, RecipeDetails, Header } from "./components";

function App() {
  const [searchText, setSearchText] = React.useState("taco");

  const handleSearchTextChange = event => {
    event.preventDefault();
    setSearchText(event.target.searchInput.value);
  };

  return (
    <div>
      <Header
        initialText={searchText}
        onSearchTextChange={handleSearchTextChange}
      />
      <Switch>
        <Route exact path="/">
          <RecipeList searchText={searchText} />
        </Route>
        <Route path="/recipe/:recipeId" component={RecipeDetails} />
      </Switch>
    </div>
  );
}

export default App;
