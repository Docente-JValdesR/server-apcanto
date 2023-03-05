import { Request, Response } from "express";
import { Activity } from "../interfaces/activity.interface";
import { RequestExt } from "../interfaces/req-ext";
import {
  createActivity,
  findActivitys,
  findActivity,
  actualizeActivity,
  eraseActivity,
} from "../services/activity.service";
import { handleHttp } from "../utils/error.handle";

const getActivity = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await findActivity(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEM");
  }
};
const getActivitys = async (req: Request, res: Response) => {
  try {
    const response = await findActivitys();
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GETS_ITEM");
  }
};
const updateActivity = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await actualizeActivity(id, body);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_ITEM");
  }
};
const postActivity = async (req: RequestExt, res: Response) => {
  try {
    const { body, user } = req;
    const dataToCreate: Activity = {
      userId: user?.email,
      ...body,
    };
    const responseItem = await createActivity(dataToCreate);
    res.send(responseItem);
  } catch (e) {
    handleHttp(res, "ERROR_CREATE_ITEM", e);
  }
};
const deleteActivity = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await eraseActivity(id);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_ITEM");
  }
};

export {
  getActivity,
  getActivitys,
  updateActivity,
  postActivity,
  deleteActivity,
};
