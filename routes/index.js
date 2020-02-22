var express = require('express');
var router = express.Router();
const os = require('os');
var hostname = os.hostname();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Kubernetes Demo' , host: hostname });
});

module.exports = router;
