class API {
  constructor() {
    this.resaults = [];
    this.recipe = {};
    this.ingredients = [];
  }
  async getResults(query) {
    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/search?q=${query}`
    );

    const data = await response.json();

    console.log(data);

    this.resaults = data.recipes;
  }

  async getRecipe(id) {
    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/get?rId=${id}`
    );

    const data = await response.json();

    this.recipe = data.recipe;

    this.ingredients = data.recipe.ingredients;
  }
}

export default API;
