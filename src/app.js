import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/router";
const app = express();
app.use(express.json());

app.use(router);

mongoose.connect("mongodb://127.0.0.1:27017/assignment1");

export const viteNodeApp = app;
