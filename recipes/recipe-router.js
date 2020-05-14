const express = require("express");

const Recipe = require("./recipe-model");

const router = express.Router();

// getRecipes(): should return a list of all recipes in the database.
// getShoppingList(recipe_id): should return a list of all ingredients and quantities for a given recipe
// getInstructions(recipe_id): should return a list of step by step instructions for preparing a recipe

router.get("/", (req, res) => {
  Recipe.getRecipes().then((recipes) => {
    res.json(recipes);
  });
});

// router.get("/:id/shoppinglist", (req,res) => {

// })

module.exports = router;
