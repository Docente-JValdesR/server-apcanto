import { Request, Response } from "express";
import {
  createItem,
  findItems,
  findItem,
  actualizeItem,
  eraseItem,
} from "../services/item.service";
import { handleHttp } from "../utils/error.handle";
const getItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await findItem(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEM");
  }
};

const getItems = async (req: Request, res: Response) => {
  try {
    const response = await findItems();
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GETS_ITEM");
  }
};

const updateItem = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await actualizeItem(id, body);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_ITEM");
  }
};

const postItem = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await createItem(body);
    res.send(responseItem);
  } catch (e) {
    handleHttp(res, "ERROR_CREATE_ITEM", e);
  }
};
const deleteItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await eraseItem(id);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_ITEM");
  }
};

export { getItem, getItems, updateItem, postItem, deleteItem };
