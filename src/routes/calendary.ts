import { Router } from "express";
import {
  getCalendary,
  getCalendaries,
  updateCalendary,
  postCalendary,
  deleteCalendary,
} from "../controllers/calendary.controller";

const router = Router();

router.get("/:id", getCalendary);
router.get("/", getCalendaries);
router.post("/", postCalendary);
router.put("/:id", updateCalendary);
router.delete("/:id", deleteCalendary);

export { router };
