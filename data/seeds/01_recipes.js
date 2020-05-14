exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("recipes").insert([
        { id: 1, name: "Peanut Butter and Jelly" },
        { id: 2, name: "Mac and Cheese" },
        { id: 3, name: "Toast" },
      ]);
    });
};
