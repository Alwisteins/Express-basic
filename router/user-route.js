const express = require('express');
const router = express.Router();
const { 
  create,
  readAll, 
  readById, 
  updateById, 
  deleteById 
  } = require('../controller/users-handler.js');

//route group
router.route('/users')
 .get(readAll)
 .post(create);

//route parameter
router.route('/users/:id')
 .get(readById)
 .put(updateById)
 .delete(deleteById);

module.exports = router;
