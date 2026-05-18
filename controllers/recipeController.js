const recipeService = require('../services/recipeService');

// @desc    Get all recipes
// @route   GET /recipes
// @access  Public
const getRecipes = async (req, res, next) => {
  try {
    const categoryFilter = req.query.category;
    const recipes = await recipeService.getAllRecipes(categoryFilter);
    res.json(recipes);
  } catch (error) {
    next(error);
  }
};

// @desc    Get a single recipe
// @route   GET /recipes/:id
// @access  Public
const getRecipe = async (req, res, next) => {
  try {
    const recipe = await recipeService.getRecipeById(req.params.id);
    if (!recipe) {
      res.status(404);
      throw new Error('Recipe not found');
    }
    res.json(recipe);
  } catch (error) {
    // Check if error is due to invalid ObjectId
    if (error.name === 'CastError') {
      res.status(404);
      error.message = 'Recipe not found';
    }
    next(error);
  }
};

// @desc    Create a recipe
// @route   POST /recipes
// @access  Public
const createRecipe = async (req, res, next) => {
  try {
    const recipe = await recipeService.createRecipe(req.body);
    res.status(201).json(recipe);
  } catch (error) {
    res.status(400); // Bad request for validation errors
    next(error);
  }
};

// @desc    Update a recipe
// @route   PATCH /recipes/:id
// @access  Public
const updateRecipe = async (req, res, next) => {
  try {
    const recipe = await recipeService.updateRecipe(req.params.id, req.body);
    if (!recipe) {
      res.status(404);
      throw new Error('Recipe not found');
    }
    res.json(recipe);
  } catch (error) {
    if (error.name === 'CastError') {
      res.status(404);
      error.message = 'Recipe not found';
    } else if (error.name === 'ValidationError') {
      res.status(400);
    }
    next(error);
  }
};

// @desc    Delete a recipe
// @route   DELETE /recipes/:id
// @access  Public
const deleteRecipe = async (req, res, next) => {
  try {
    const recipe = await recipeService.deleteRecipe(req.params.id);
    if (!recipe) {
      res.status(404);
      throw new Error('Recipe not found');
    }
    res.json({ message: 'Recipe removed successfully' });
  } catch (error) {
    if (error.name === 'CastError') {
      res.status(404);
      error.message = 'Recipe not found';
    }
    next(error);
  }
};

module.exports = {
  getRecipes,
  getRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
};
