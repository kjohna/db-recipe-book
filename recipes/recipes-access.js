const knex = require('knex');
const config = require('../knexfile.js');

const db = knex(config.development);
const errors = {
  '19': 'Another record with that value exists'
}

module.exports = {
  getDishes,
  addDish,
  getDish,
  getRecipes,
  addRecipe
}

async function getDishes() {
  try {
    const dishes = await db('dishes');
    return dishes;
  }
  catch (error) {
    throw error;
  }
}

async function getDish(id) {
  try {
    const dish = await db('dishes')
      .where({ id })
      .first();
    console.log(dish);
    return dish;
  } catch (error) {
    throw error;
  }
}

async function getRecipes(dishId) {
  try {
    const recipes = await db('recipes')
      .where({ dish_id: dishId });
    console.log(recipes);
    return recipes;
  } catch (error) {
    throw error;
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
    throw "Please provide dish name."
  }
}

async function addRecipe(recipeData) {
  if (recipeData.name 
    && recipeData.dish_id 
    && recipeData.directions) {
    try {
      const [id] = await db('recipes')
        .insert(recipeData);
      return id;
    } catch (error) {
      const msg = errors[error.errno];
      throw msg;
    }
  } else {
    throw "Please provide complete recipe data."
  }
}