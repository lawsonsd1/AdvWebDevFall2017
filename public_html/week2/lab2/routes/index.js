var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lab 2' });
});

router.get('/form', function(req, res, next) {
  res.render('form', { title: 'Please fill out the form' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Page' });
});

router.post('/form', function(req, res, next) {
  res.render('form', { title: req.body.name });
});

router.post('/form', function(req, res, next) {
  res.render('form', { title: req.body.email });
});

router.post('/form', function(req, res, next) {
  res.render('form', { title: req.body.comments });
});

module.exports = router;
