import { Item } from "../interfaces/item.interface";
import ItemModel from "../models/item.model";

const createItem = async (item: Item) => {
  const responseInsert = await ItemModel.create(item);
  return responseInsert;
};
const findItems = async () => {
  const responseItem = await ItemModel.find({});
  return responseItem;
};
const findItem = async (id: string) => {
  const responseItem = await ItemModel.findOne({ _id: id });
  return responseItem;
};
const actualizeItem = async (id: string, data: Item) => {
  const responseItem = await ItemModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return responseItem;
};
const eraseItem = async (id: string) => {
  const responseItem = await ItemModel.remove({ _id: id });
  return responseItem;
};
export { createItem, findItems, findItem, actualizeItem, eraseItem };
