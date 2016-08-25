var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // renders html
  res.render('index', {
    title: 'Awesome Pet Page',
    pet1: 'dog',
    pet2: 'cat'
  });
});

router.get('/:', function(req, res, next){
  res.render('dog1', {

  })
});

module.exports = router;




// cat1 url http://i.giphy.com/vqPOUf6mzrSve.gif
// cat2 url http://i.giphy.com/Vj5ZgHbXa3kWY.gif
// cat3 url http://i.giphy.com/wv3pJQDUfpyY8.gif

//dog1 url http://i.giphy.com/DgzJFvt6StyFi.gif
// dog2 url http://i.giphy.com/DFmCDPP9tR92o.gif
// dog3 url http://i.giphy.com/aFOtri4IywD7i.gif