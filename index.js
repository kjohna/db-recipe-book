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
    console.log(dishes);
    res.status(200).json(dishes);
  } catch (error) {
    res.status(500).json(error);
  }
});

const port = process.env.PORT || 4000;

server.listen(port, () => console.log(`\n server listening on ${port}\n`));