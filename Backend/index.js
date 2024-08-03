const express = require('express');

const app = express();

const PORT = 5002;

app.use('/recipe', require('./routes/recipe.js'));

app.listen(PORT, (err) => {
    console.log("Server listening at "+ PORT);
})