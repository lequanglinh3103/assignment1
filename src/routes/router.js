import express from "express";
import {
  addProduct,
  getAll,
  getProductId,
  remove,
  updateProduct,
} from "../controllers/product";
const router = express.Router();

router.get("/products", getAll);
router.get("/products/:id", getProductId);
router.post("/products", addProduct);
router.patch("/products/:id", updateProduct);
router.delete("/products/:id", remove);
export default router;
