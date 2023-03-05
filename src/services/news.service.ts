import { News } from "../interfaces/news.interface";
import NewsModel from "../models/news.model";

const createNew = async (News: News) => {
  const responseInsert = await NewsModel.create(News);
  return responseInsert;
};
const findNews = async () => {
  const responseItem = await NewsModel.find({});
  return responseItem;
};
const findNew = async (id: string) => {
  const responseItem = await NewsModel.findOne({ _id: id });
  return responseItem;
};
const actualizeNew = async (id: string, data: News) => {
  const responseItem = await NewsModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return responseItem;
};
const eraseNew = async (id: string) => {
  const responseItem = await NewsModel.remove({ _id: id });
  return responseItem;
};
export { createNew, findNews, findNew, actualizeNew, eraseNew };
