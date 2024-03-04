import express from "express";
const router = express.Router();
const orderController = require("../controllers/orderController");
import { getPriceValidator } from "../middlewares/validation";

router.post("/getPrice", getPriceValidator,  orderController.calculatePrice);

module.exports = router;