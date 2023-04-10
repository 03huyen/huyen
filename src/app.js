import express from "express";
import categoryRouter from "./routes/category";
import productRouter from "./routes/product";
import authRouter from "./routes/auth";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", productRouter);
app.use("/api", categoryRouter);
app.use("/api", authRouter);

mongoose.connect("mongodb://127.0.0.1:27017/nodejs");
export const viteNodeApp = app;
