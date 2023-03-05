import { Router } from "express";
import {
  getNew,
  getNews,
  updateNew,
  postNew,
  deleteNew,
} from "../controllers/news.controller";

const router = Router();

router.get("/:id", getNew);
router.get("/", getNews);
router.post("/", postNew);
router.put("/:id", updateNew);
router.delete("/:id", deleteNew);

export { router };
