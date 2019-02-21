
exports.up = function(knex, Promise) {
  return knex.schema
  // ***** dishes table ******
  .createTable('dishes', tbl => {
    // primary key
    tbl.increments();
    // dish name
    tbl
      .string('name', 128)
      .notNullable()
      .unique();
    // add timestamps
    tbl.timestamps(true,true);
  })
  // ***** recipes table ******
  // references: dishes table
  .createTable('recipes', tbl => {
    // primary key
    tbl.increments();
    // recipe name
    tbl
      .string('name', 128)
      .notNullable()
      .unique();
    // foreign key -> dish id
    tbl
      .integer('dish_id')
      .unsigned()
      .references('id')
      .inTable('dishes')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
    // directions: json
    tbl
      .json('directions');
    // add timestamps
    tbl.timestamps(true,true);
  })
  // ***** ingredients table ******
  .createTable('ingredients', tbl => {
    // primary key
    tbl.increments();
    // ingredient name
    tbl
      .string('name', 128)
      .notNullable()
      .unique();
    // add timestamps
    tbl.timestamps(true,true);
  })
  // ***** recipe_ingredients table ******
  // references: ingredient table, recipe table
  .createTable('recipe_ingredients', tbl => {
    // primary key
    tbl.increments();
    // foreign key -> ingredient id
    tbl
      .integer('ingredient_id')
      .unsigned()
      .references('id')
      .inTable('ingredients')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
    // foreign key -> recipes id
    tbl
      .integer('recipe_id')
      .unsigned()
      .references('id')
      .inTable('recipes')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')
    // quantity
    tbl
      .float('quantity')  // default to 2 places ok
      .unsigned()  // no negative quantities
    // add timestamps
    tbl.timestamps(true,true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists('dishes')
  .dropTableIfExists('recipes')
  .dropTableIfExists('ingredients')
  .dropTableIfExists('recipe_ingredients');
};
