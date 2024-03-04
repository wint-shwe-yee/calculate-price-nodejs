import express from "express";
const app = express();
const orderRoute = require("./orderRoute");

app.use(express.json());
app.use("/order", orderRoute);

module.exports = app;