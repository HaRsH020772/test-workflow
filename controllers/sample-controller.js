const router = require('express').Router();

const {CheckRoute} = require("../services/sample-service");

// Configuring the routes

router.route("/").get(CheckRoute);

module.exports = router;