
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries, reset ids
  return knex('recipe_ingredients')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        // pepperoni pizza ingredients 
        { 
          ingredient_id: 1,
          recipe_id: 1,
          quantity: 1.0
        },
        { 
          ingredient_id: 2,
          recipe_id: 1,
          quantity: 1.5
        },
        { 
          ingredient_id: 3,
          recipe_id: 1,
          quantity: 1
        },
        { 
          ingredient_id: 4,
          recipe_id: 1,
          quantity: 15
        },
        // sausage pizza ingredients
        { 
          ingredient_id: 1,
          recipe_id: 1,
          quantity: 1.0
        },
        { 
          ingredient_id: 2,
          recipe_id: 1,
          quantity: 1.5
        },
        { 
          ingredient_id: 3,
          recipe_id: 1,
          quantity: 1
        },
        { 
          ingredient_id: 5,
          recipe_id: 1,
          quantity: 15
        },
        // anchovie pizza ingredients
        { 
          ingredient_id: 1,
          recipe_id: 1,
          quantity: 1.0
        },
        { 
          ingredient_id: 2,
          recipe_id: 1,
          quantity: 1.5
        },
        { 
          ingredient_id: 3,
          recipe_id: 1,
          quantity: 1
        },
        { 
          ingredient_id: 6,
          recipe_id: 1,
          quantity: 15
        },
      ]);
    });
};
