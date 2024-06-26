const express = require('express');
const { connectDB } = require("./conn");
const PORT = 8000;
const app = express();

// Connecting to MongoDB using Mongoose
connectDB("mongodb://127.0.0.1:27017/REST-API")
    .then(() => console.log("Database Connected !"));

// Middlewares
app.use(express.urlencoded({
    extended: false
}));

// Routes
const routes = require('./routes');
app.use('/', routes);

app.set('view engine', 'ejs'); // Set EJS as the template engine
app.set('views', __dirname + '/views'); // Set the views directory


// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});