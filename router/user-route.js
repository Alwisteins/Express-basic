const express = require('express');
const router = express.Router();
const {
  register,
  create,
  readAll, 
  readById, 
  updateById, 
  deleteById 
  } = require('../controller/users-handler.js');
  
//register page
router.route('/users/register')
  .get(register)
  .post(create);

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
