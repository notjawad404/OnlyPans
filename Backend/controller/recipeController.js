const Recipes = require('../model/recipeModel')


// Get all recipes
const getRecipes = async (req, res) =>{
    const recipes = await Recipes.find()
    return res.json(recipes)
}

// Get recipe by ID
const getRecipe = async (req, res) =>{
    const recipe = await Recipes.findById(req.params.id)
    if(!recipe){
        return res.json({message: 'Recipe not found'})
    }
    return res.json(recipe) 
}

// Add a new recipe
const addRecipe = async (req, res) =>{
    const {title, ingredients, instructions, time, image, username} = req.body;

    if(!title || !ingredients || !instructions || !time || !username){
        res.json({message: 'Required parameters missing'})
    }

    const addRecipeItem = await Recipes.create({title: title, ingredients: ingredients, instructions: instructions, time: time, image: image, username: username});

    return res.json(addRecipeItem)
}

// Edit a recipe
const editRecipe = async (req, res) =>{
    const {title, ingredients, instructions, time, image} = req.body;

    var recipe = await Recipes.findById(req.params.id);
    try{
        if(recipe){
            await Recipes.findByIdAndUpdate(req.params.id, req.body, {new: true});
            res.json({title, ingredients, instructions, time, image})
        }
    }
    catch(err){
        return res.status(404).json({message: err.message})
    }
}

// Delete a recipe
const deleteRecipe = async (req, res) =>{ 
    const recipe = await Recipes.findByIdAndDelete(req.params.id)

    try{
        res.json({message: 'Recipe deleted'})        
    }
    catch(err){
        return res.status(404).json({message: err.message})
    }
}

module.exports = {getRecipes, getRecipe, addRecipe, editRecipe, deleteRecipe}