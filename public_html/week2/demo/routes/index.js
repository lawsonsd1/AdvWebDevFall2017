var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Stephen', msg: 'this is a message' });
});

router.get('/form', function(req, res, next) {
  res.render('form', { title: 'Stephen' });
});


router.post('/form', function(req, res, next) {
  res.render('form', { title: req.body.email });
});

router.post('/form', function(req, res, next) {
  res.render('form', { title: req.body.email });
});

module.exports = router;
