const Product = require('../models/Product');
const User = require('../models/User');
const authService = require('../services/auth.service');
const bcryptService = require('../services/bcrypt.service');

const ProductController = () => {
  const index = async (req, res) => {
    const products = await Product().findAll();

    return res.status(200).json({ products });
  };
  return {
    index
  }
}
module.exports = ProductController;