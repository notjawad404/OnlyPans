const express = require('express');

const app = express();

const PORT = 5001;

app.listen(PORT, (err) => {
    console.log("Server listening at "+ PORT);
})