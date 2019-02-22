const knex = require('knex');
const config = require('../knexfile.js');

const db = knex(config.development);

module.exports = {
  getDishes,
  // addDish,
  // getDish,
  // getRecipes,
  // addRecipe
}

async function getDishes() {
  console.log("getting dishes");
  try {
    let dishes = await db('dishes');
    console.log(dishes);
    return dishes;
  }
  catch (error) {
    console.log("error: ", error);
    return error;
  }
}

// getDishes();