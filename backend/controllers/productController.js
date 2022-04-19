import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// @desc:  fetch all products
// @route:  GET /api/products
// @access:  Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  res.json(products);
});

// @desc:  fetch single product
// @route:  GET /api/products/:id
// @access:  Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc:  delete a single product
// @route:  DELETE /api/products/:id
// @access:  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  // could put check here to see if the req.user._id is equal to the product.user._id
  // to make sure only the admin that added the product would be able to delete that product
  // the below check allows all admin to delete any product
  if (product) {
    await product.remove();
    res.json({
      message: `The product with an id: ${req.params.id} has successfully been removed`,
    });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export { getProducts, getProductById, deleteProduct };
