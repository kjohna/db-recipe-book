
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries, resets ids
  return knex('dishes')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {name: 'pizza'},
        {name: 'tacos'},
        {name: 'soup'},
      ]);
    });
};
