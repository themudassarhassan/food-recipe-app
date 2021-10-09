import axios from 'axios';

const URL = 'https://api.edamam.com/api/recipes/v2';
const appId = '3f12c875';
const appKey = '7697a63e9b3481eafd1834efe392b1ec';


export function getRecipes(query) {
  const endPoint = getRecipesEndPoint(query);
  return axios.get(endPoint);
}

export function getRecipeDetails(id) {
  const endPoint = getRecipeDetailEndPoint(id);
  return axios.get(endPoint);
}

function getRecipeDetailEndPoint(id) {
  return appendRequiredParams(`${URL}/${id}`)
}

function getRecipesEndPoint(query) {
  return appendFields(appendRequiredParams(URL)) + `&q=${query}`;
}

function appendFields(url) {
  return `${url}&field=image&field=uri&field=label&field=source`;
}

function appendRequiredParams(url) {
  return `${url}?type=public&app_id=${appId}&app_key=${appKey}`;
}



