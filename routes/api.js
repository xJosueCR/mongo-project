// Full Documentation - https://docs.turbo360.co
const express = require('express');
const { response } = require('../app');
const router = express.Router();
//importing profile js
const profile = require('../models/profile');
const mongoose = require('mongoose');
/*  This is a sample API route. */
//get handler
mongoose.connect('mongodb://localhost/test', function (err) {
  if (err) {
    console.err(err);
  } else {
    console.log('Connected');
  }
});
router.get('/profile', (request, response) => {
  const query = request.query;
  profile
    .find(query)
    .then((profiles) => {
      response.json({
        confirmation: 'success',
        data: profiles,
      });
    })
    .catch((err) => {
      response.json({
        confirmation: 'Failed',
        message: 'An error has ocurred',
      });
    });
});

module.exports = router;

//hello
