const express = require('express');
const router = express.Router();
const Place = require("../models/place");


/* GET home page */
router.get('/', (req, res, next) => {
  Place
    .find({})
    .then(placesData => {
      return res.render('index')
    })

});

//defino como va a ser la base de datos 


module.exports = router;