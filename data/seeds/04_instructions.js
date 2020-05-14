exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("instructions")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("instructions").insert([
        {
          id: 1,
          step_number: 1,
          step: "Put peanut butter on bread",
          recipe_id: 1,
        },
        {
          id: 2,
          step_number: 2,
          step: "Put Jelly on top of peanut butter",
          recipe_id: 1,
        },
        {
          id: 3,
          step_number: 3,
          step: "Place bread on top and enjoy",
          recipe_id: 1,
        },
        {
          id: 4,
          step_number: 1,
          step: "boil noodles for 7 minutes",
          recipe_id: 2,
        },
        {
          id: 5,
          step_number: 2,
          step: "Drain water, mix noodles with cheese",
          recipe_id: 2,
        },
        {
          id: 6,
          step_number: 1,
          step: "toast bread until crispy",
          recipe_id: 3,
        },
        { id: 7, step_number: 2, step: "butter toast and enjoy", recipe_id: 3 },
      ]);
    });
};
