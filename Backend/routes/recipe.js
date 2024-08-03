const express = require('express');
const { getRecipes } = require('../controller/recipeController.js');

const router = express.Router();


router.get('/', getRecipes)


module.exports = router;