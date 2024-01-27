const express = require('express');
const router = express.Router();
const ItemController = require('../controllers/itemController');

function setItemRoutes() {
  const itemController = new ItemController();

  router.get('/', itemController.getAllItems);
  router.get('/:id', itemController.getItemById);
  router.post('/', itemController.createItem);
  router.put('/:id', itemController.updateItem);
  router.delete('/:id', itemController.deleteItem);

  return router;
}

module.exports = setItemRoutes;