const knex = require('knex');
const config = require('../knexfile.js');

const db = knex(config.development);
const errors = {
  '19': 'Another record with that value exists'
}

module.exports = {
  getDishes,
  addDish,
  // getDish,
  // getRecipes,
  // addRecipe
}

async function getDishes() {
  try {
    let dishes = await db('dishes');
    return dishes;
  }
  catch (error) {
    return error;
  }
}

async function addDish(dishData) {
  if (dishData.name) {
    try {
      const [id] = await db('dishes')
        .insert(dishData);
      return id;
    } catch (error) {
      const msg = errors[error.errno];
      console.log("here: ", errors[error.errno]);
      throw msg;
      // don't understand why this doesn't work:
      // return new Error(msg); 
    }
  } else {
    return ("Dish mush have a name.")
  }
}