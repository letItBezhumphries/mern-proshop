const express = require("express");
require("dotenv").config();
const products = require("../data/products");
const PORT = process.env.PORT || 5000;
const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;

  const product = products.find((p) => p._id === id);
  res.json(product);
});

app.listen(PORT, () => {
  console.log(
    `Express server is running in ${process.env.NODE_ENV} and listening on port ${PORT}`
  );
});
