const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

function setUserRoutes() {
  const userController = new UserController();

  router.post('/users', userController.createUser);
  router.get('/users', userController.getUsers);
  router.get('/users/:id', userController.getUserById);
  router.put('/users/:id', userController.updateUser);
  router.delete('/users/:id', userController.deleteUser);

  return router;
}

module.exports = setUserRoutes;