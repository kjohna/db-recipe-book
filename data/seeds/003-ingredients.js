
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries, reset ids
  return knex('ingredients')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'pizza dough'},
        {name: 'pizza sauce'},
        {name: 'mozzarella cheese'},
        {name: 'pepperoni'},
        {name: 'italian sausage'},
        {name: 'anchovies'},
        {name: 'ground beef'},
        {name: 'chicken breast'},
        {name: 'pork shoulder'},
        {name: 'onion'},
        {name: 'lettuce'},
        {name: 'tomato'},
        {name: 'taco shells-crispy'},
        {name: 'taco shells-soft'},
        {name: 'cheddar cheese'},
        {name: 'jack cheese'},
        {name: 'celery'},
        {name: 'carrots'},
        {name: 'noodles'},
        {name: 'orzo'},
        {name: 'lemon'},
        {name: 'dill'},
      ]);
    });
};
