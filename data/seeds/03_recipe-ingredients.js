exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipe_ingredients")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("recipe_ingredients").insert([
        {
          id: 1,
          amount: 4,
          measurement: "tsp",
          recipe_id: 1,
          ingredients_id: 1,
        },
        {
          id: 2,
          amount: 3,
          measurement: "tsp",
          recipe_id: 1,
          ingredients_id: 2,
        },
        {
          id: 3,
          amount: 1,
          measurement: "cup",
          recipe_id: 2,
          ingredients_id: 3,
        },
        {
          id: 4,
          amount: 0.5,
          measurement: "cup",
          recipe_id: 2,
          ingredients_id: 4,
        },
        {
          id: 5,
          amount: 1,
          measurement: "slice",
          recipe_id: 3,
          ingredients_id: 5,
        },
        {
          id: 6,
          amount: 2,
          measurement: "tsp",
          recipe_id: 3,
          ingredients_id: 6,
        },
      ]);
    });
};
