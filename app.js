const express = require('express');
const app = express();
const ErrorHandler = require("./middlewares/error-handler");
const morgan = require('morgan');

// Regular middlewares set-up
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// Configuring error middlewares
app.use(ErrorHandler);

// Logging middlewares
app.use(morgan('common'));

// Configuring Controller Modules
const SampleModule = require("./controllers/sample-controller");

// Configuring routes
app.use("/sample", SampleModule);

module.exports = app;