import { Router } from "express";
import {
  deleteItem,
  getItem,
  getItems,
  postItem,
  updateItem,
} from "../controllers/item.controller";
import { rolCheck } from "../middleware/rol";
import { checkJwt } from "../middleware/session";

const router = Router();

router.get("/:id", getItem);
router.get("/", checkJwt, rolCheck("administrador"), getItems);
router.post("/", postItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

export { router };
