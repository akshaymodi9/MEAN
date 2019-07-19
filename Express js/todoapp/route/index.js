//importing
var express = require('express')

//Importing route
var router = express.Router();

//Simple routes
router.get('/', function (req, res, next) {

    res.send("Home route")
})

router.get('/about', function (req, res, next) {

    res.send("About route")
})
router.get('/contact', function (req, res, next) {

    res.send("contact route")
})

module.exports = router;