import express from "express";
import productRouter from "./routes/product";
import authRouter from "./routes/auth";
import mongoose from "mongoose";
const app = express();

app.use(express.json());


app.use("/api", productRouter);
app.use("/api", authRouter);

mongoose.connect("mongodb://127.0.0.1:27017/we17302");

export const viteNodeApp = app;
