const db = require("../data/db-config");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
};

// getRecipes(): should return a list of all recipes in the database.
// getShoppingList(recipe_id): should return a list of all ingredients and quantities for a given recipe
// getInstructions(recipe_id): should return a list of step by step instructions for preparing a recipe

function getRecipes() {
  return db("recipes");
}

function getShoppingList(recipe_id) {
  return db("recipes")
    .select(
      "ingredients.name",
      "recipe_ingredients.amount",
      "recipe_ingredients.measurement"
    )
    .join(
      "recipe_ingredients",
      "ingredients.id",
      "=",
      "recipe_ingredients.ingredients_id"
    )
    .where("recipe_ingredients.recipe_id", recipe_id);
}

function getInstructions(recipe_id) {
  return db("recipes")
    .select("recipes.name", "instructions.step", "instructions.step_number")
    .join("instructions", "recipes.id", "=", "instructions.recipe_id")
    .where("instructions.recipe_id", recipe_id);
}
