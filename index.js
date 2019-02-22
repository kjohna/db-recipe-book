const express = require('express');
const helmet = require('helmet');

const Recipes = require('./recipes/recipes-access.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('', (req, res) => {
  res.status(200).json({ message: "server listening!" });
});

server.get('/api/dishes', async (req, res) => {
  try {
    const dishes = await Recipes.getDishes();
    res.status(200).json(dishes);
  } catch (error) {
    res.status(500).json(error);
  }
});

server.get('/api/dishes/:id', async (req, res) => {
  const dishId = req.params.id;
  try {
    const dish = await Recipes.getDish(dishId);
    const recipes = await Recipes.getRecipes(dishId);
    res.status(200).json({ dish: dish, recipes: recipes });
  } catch (error) {
    res.status(500).json(error);
  }
}); 

server.post('/api/dishes', async (req, res) => {
  try {
    const id = await Recipes.addDish(req.body);
    res.status(200).json({ id });
  } catch (error) {
    res.status(500).json(error);
  }
});

server.post('/api/recipes', async (req, res) => {
  try {
    const id = await Recipes.addRecipe(req.body);
    res.status(200).json({ id });
  } catch (error) {
    res.status(500).json(error);
  }
});

const port = process.env.PORT || 4000;

server.listen(port, () => console.log(`\n server listening on ${port}\n`));