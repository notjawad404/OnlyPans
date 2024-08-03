
const getRecipes = (req, res) =>{
    res.json({message: 'Get all Recipes'})
}

const getRecipe = (req, res) =>{
    res.json({message: 'Get Recipe by ID'})
}

const addRecipe = (req, res) =>{
    res.json({message: 'Add a Recipe'})
}

const editRecipe = (req, res) =>{
    res.json({message: 'Edit a Recipe'})
}

const deleteRecipe = (req, res) =>{
    res.json({message: 'Delete a Recipe'})
}

module.exports = {getRecipes, getRecipe, addRecipe, editRecipe, deleteRecipe}