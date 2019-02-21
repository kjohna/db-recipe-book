
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries, reset ids
  return knex('recipes')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        // pizzas
        { name: 'pepperoni', 
          dish_id: 1, // id 1 for pizza
          directions: {
            0: "oven 450F",
            1: "put dough",
            2: "put sauce",
            3: "put cheese",
            4: "put pepperoni",
            5: "in oven 15mins",
            6: "cut it, eat it"
          }, 
        },
        { name: 'sausage', 
          dish_id: 1, // id 1 for pizza
          directions: {
            0: "oven 450F",
            1: "put dough",
            2: "put sauce",
            3: "put cheese",
            4: "put sausage",
            5: "in oven 15mins",
            6: "cut it, eat it"
          }, 
        },
        { name: 'anchovies', 
          dish_id: 1, // id 1 for pizza
          directions: {
            0: "oven 450F",
            1: "put dough",
            2: "put sauce",
            3: "put cheese",
            4: "put anchovies",
            5: "in oven 15mins",
            6: "cut it, eat it"
          }, 
        },
        // tacos
        { name: 'beef tacos', 
          dish_id: 2, // id 2 for tacos
          directions: {
            0: "onions, chopped",
            1: "beef, onions in pan till brown",
            2: "grate cheese",
            3: "cut lettuce",
            4: "cut tomatoes",
            5: "warm shells",
            6: "cheese in shell, beef in shell, lettuce and tomatoes in shell, eat it"
          }, 
        },
        { name: 'chicken tacos', 
          dish_id: 2, // id 2 for tacos
          directions: {
            0: "chicken, onions in pot with broth till cooked",
            1: "grate cheese",
            2: "cut lettuce",
            3: "cut tomatoes",
            4: "warm shells",
            5: "cheese in shell, chicken in shell, lettuce and tomatoes in shell, eat it"
          }, 
        },
        { name: 'pork tacos', 
          dish_id: 2, // id 2 for tacos
          directions: {
            0: "pork in oven",
            1: "grate cheese",
            2: "cut lettuce",
            3: "cut tomatoes",
            4: "warm shells",
            5: "cheese in shell, pork in shell, lettuce and tomatoes in shell, eat it"
          }, 
        },
        // soups
        { name: 'chicken soup', 
          dish_id: 3, // id 3 for soup
          directions: {
            0: "celery, carrots, onion on stove med",
            1: "add chicken, broth",
            2: "add noodles, 10 minutes",
            3: "scoop it",
            4: "eat it",
          }, 
        },
        { name: 'greek chicken soup', 
          dish_id: 3, // id 3 for soup
          directions: {
            0: "celery, onion on stove med",
            1: "add chicken, broth",
            2: "add orzo, 10 minutes",
            3: "scoop it, add lemon juice, dill",
            4: "eat it",
          }, 
        },
      ]);
    });
};
