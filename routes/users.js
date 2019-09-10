const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');

router.get('/edit/:iduser', usersController.getEditUser);

router.post('/new', usersController.postNewUser);
  
router.get('/new', usersController.getNewUser);
  
router.get('/', usersController.getUsers);

module.exports = router;