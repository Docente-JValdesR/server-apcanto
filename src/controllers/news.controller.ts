import { Request, Response } from "express";
import {
  createNew,
  findNews,
  findNew,
  actualizeNew,
  eraseNew,
} from "../services/news.service";
import { handleHttp } from "../utils/error.handle";

const getNew = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await findNew(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEM");
  }
};
const getNews = async (req: Request, res: Response) => {
  try {
    const response = await findNews();
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GETS_ITEM");
  }
};
const updateNew = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await actualizeNew(id, body);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_ITEM");
  }
};
const postNew = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await createNew(body);
    res.send(responseItem);
  } catch (e) {
    handleHttp(res, "ERROR_CREATE_ITEM", e);
  }
};
const deleteNew = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await eraseNew(id);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_ITEM");
  }
};

export { getNew, getNews, updateNew, postNew, deleteNew };
