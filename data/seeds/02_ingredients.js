exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("ingredients").insert([
        { id: 1, name: "Peanut Butter" },
        { id: 2, name: "Jelly" },
        { id: 3, name: "Cheese" },
        { id: 4, name: "Noodles" },
        { id: 5, name: "Bread" },
        { id: 6, name: "Butter" },
      ]);
    });
};
