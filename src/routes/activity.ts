import { Router } from "express";
import {
  getActivity,
  getActivitys,
  updateActivity,
  postActivity,
  deleteActivity,
} from "../controllers/activity.controller";

const router = Router();

router.get("/:id", getActivity);
router.get("/", getActivitys);
router.post("/", postActivity);
router.put("/:id", updateActivity);
router.delete("/:id", deleteActivity);

export { router };
