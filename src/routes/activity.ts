import { Router } from "express";
import {
  getActivity,
  getActivitys,
  updateActivity,
  postActivity,
  deleteActivity,
} from "../controllers/activity.controller";
import { rolCheck } from "../middleware/rol";
import { checkJwt } from "../middleware/session";

const router = Router();

router.get("/:id", getActivity);
router.get("/", getActivitys);
router.post("/", checkJwt, rolCheck("admin"), postActivity);
router.put("/:id", updateActivity);
router.delete("/:id", deleteActivity);

export { router };
