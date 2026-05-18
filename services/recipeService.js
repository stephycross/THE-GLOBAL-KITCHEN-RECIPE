const Recipe = require('../models/recipeModel');

const getAllRecipes = async (categoryFilter) => {
  const query = categoryFilter ? { category: categoryFilter } : {};
  return await Recipe.find(query);
};

const getRecipeById = async (id) => {
  return await Recipe.findById(id);
};

const createRecipe = async (recipeData) => {
  const recipe = new Recipe(recipeData);
  return await recipe.save();
};

const updateRecipe = async (id, updateData) => {
  return await Recipe.findByIdAndUpdate(id, updateData, {
    new: true, // Return the updated document
    runValidators: true, // Run Mongoose validation on update
  });
};

const deleteRecipe = async (id) => {
  return await Recipe.findByIdAndDelete(id);
};

module.exports = {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe,
};
