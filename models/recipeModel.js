const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Recipe title is required'],
      trim: true,
    },
    ingredients: {
      type: [String],
      required: [true, 'At least one ingredient is required'],
      validate: {
        validator: function (v) {
          return v && v.length > 0;
        },
        message: 'A recipe must have at least one ingredient',
      },
    },
    instructions: {
      type: String,
      required: [true, 'Cooking instructions are required'],
    },
    cookingTime: {
      type: Number,
      required: [true, 'Cooking time is required'],
      min: [1, 'Cooking time must be at least 1 minute'],
    },
    difficulty: {
      type: String,
      required: [true, 'Difficulty level is required'],
      enum: {
        values: ['Easy', 'Medium', 'Hard'],
        message: '{VALUE} is not a valid difficulty level',
      },
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      index: true, // Indexing for fast lookups
    },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt properties
  }
);

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
