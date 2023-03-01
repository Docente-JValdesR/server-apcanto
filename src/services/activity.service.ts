import { Activity } from "../interfaces/activity.interface";
import ActivityModel from "../models/activity.model";

const createActivity = async (activity: Activity) => {
  const responseInsert = await ActivityModel.create(activity);
  return responseInsert;
};

const findActivitys = async () => {
  const responseItem = await ActivityModel.find({});
  return responseItem;
};

const findActivity = async (id: string) => {
  const responseItem = await ActivityModel.findOne({ _id: id });
  return responseItem;
};

const actualizeActivity = async (id: string, data: Activity) => {
  const responseItem = await ActivityModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return responseItem;
};

const eraseActivity = async (id: string) => {
  const responseItem = await ActivityModel.remove({ _id: id });
  return responseItem;
};
export { createActivity, findActivitys, findActivity, actualizeActivity, eraseActivity };
