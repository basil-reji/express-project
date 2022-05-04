var express = require('express');
var router = express.Router();
var adminHelper = require("../helpers/adminHelper")
var functionHelper = require("../helpers/functionHelper")

/* GET admins listing. */
router.get('/', function(req, res, next) {
  res.render('admin/admin', { title: 'Admin' });
});

module.exports = router;