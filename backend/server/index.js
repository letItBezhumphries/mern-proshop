import express from "express";
import dotenv from "dotenv";
import connectDB from "../mongo/db.js";
import colors from "colors";

import productRoutes from "../routes/productRoutes.js";

dotenv.config();

connectDB();

const PORT = process.env.PORT || 5000;
const app = express();

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(
    `Express server is running in ${process.env.NODE_ENV} and listening on port ${PORT}`
  );
});
