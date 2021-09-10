import express from "express";
import morgan from "morgan";
import ProductsRoute from "./routes/products.routes";

const app = express();
app.use(morgan("dev"));

app.use("/product", ProductsRoute);

export default app;
