exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (recipes) => {
      recipes.increments();
      recipes.string("name", 255).notNullable();
    })
    .createTable("ingredients", (ingredients) => {
      ingredients.increments();
      ingredients.string("name", 255).notNullable();
    })
    .createTable("recipe_ingredients", (ri) => {
      ri.increments();
      ri.integer("amount");
      ri.string("measurement");

      ri.integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");

      ri.integer("ingredients_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
    })
    .createTable("instructions", (instructions) => {
      instructions.increments();
      instructions.string("step").notNullable();
      instructions.integer("step_number").notNullable();

      instructions
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("instructions")
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
