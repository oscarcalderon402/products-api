import { Router } from "express";
const router = Router();

import * as productsCtrl from "../controllers/products.controller";

router.post("/", (req, res) => {
  productsCtrl.getProducts(req, res);
});
router.get("/", (req, res) => {
  productsCtrl.getProducts(req, res);
});
router.get("/:productId", (req, res) => {
  productsCtrl.getProducts(req, res);
});
router.put("/:productId", (req, res) => {
  productsCtrl.getProducts(req, res);
});
router.delete("/productId", (req, res) => {
  productsCtrl.getProducts(req, res);
});

export default router;
