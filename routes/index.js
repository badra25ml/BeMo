var express = require('express');
var router = express.Router();
var resize = require('../public/javascripts/resize');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
// GET contact us page
router.get('/contact-us', function(req, res, next) {
  res.render('contact-us', { title: 'About us' });
});
// Resize images
router.get('/change', (req, res) => {
  // Extract the query-parameter
  const widthString = req.query.width
  const heightString = req.query.height
  const format = req.query.format

  // Parse to integer if possible
  let width, height
  if (widthString) {
    width = parseInt(widthString)
  }
  if (heightString) {
    height = parseInt(heightString)
  }
  // Set the content-type of the response
  res.type(`image/${format || 'png'}`)

  // Get the resized image
  resize('./public/images/bemo-logo2.png', format, width, height).pipe(res)
})

module.exports = router;
