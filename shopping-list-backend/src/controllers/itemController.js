const Item = require('../models/item');

class ItemController {
  async getAllItems(req, res) {
    try {
      const items = await Item.find();
      res.status(200).json(items);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  }

  async getItemById(req, res) {
    const { id } = req.params;
    try {
      const item = await Item.findById(id);
      if (!item) {
        return res.status(404).json({ message: 'Item not found' });
      }
      res.status(200).json(item);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  }

  async createItem(req, res) {
    const { name, quantity, price } = req.body;
    try {
      const newItem = new Item({ name, quantity, price });
      await newItem.save();
      res.status(201).json(newItem);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  }

  async updateItem(req, res) {
    const { id } = req.params;
    const { name, quantity, price } = req.body;
    try {
      const item = await Item.findById(id);
      if (!item) {
        return res.status(404).json({ message: 'Item not found' });
      }
      item.name = name;
      item.quantity = quantity;
      item.price = price;
      await item.save();
      res.status(200).json(item);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  }

  async deleteItem(req, res) {
    const { id } = req.params;
    try {
      const item = await Item.findById(id);
      if (!item) {
        return res.status(404).json({ message: 'Item not found' });
      }
      await item.remove();
      res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  }
}

module.exports = ItemController;