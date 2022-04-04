import express from "express";
import dotenv from "dotenv";
import connectDB from "../mongo/db.js";
import colors from "colors";

// ** Routes
import productRoutes from "../routes/productRoutes.js";

// ** Middlewares
import { notFound, errorHandler } from "../middleware/errorMiddleware.js";

dotenv.config();

connectDB();

const PORT = process.env.PORT || 5000;
const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/products", productRoutes);

// fallback for 404 errors
app.use(notFound);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(
    `Express server is running in ${process.env.NODE_ENV} and listening on port ${PORT}`
  );
});
