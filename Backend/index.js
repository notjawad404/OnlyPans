const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/connectionDB.js');

dotenv.config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5002;

connectDB(); 
app.use('/recipe', require('./routes/recipeRoutes.js'));

app.listen(PORT, (err) => {
    console.log("Server listening at "+ PORT);
})