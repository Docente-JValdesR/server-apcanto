import { Request, Response } from "express";
import {
  createCalendary,
  findCalendaries,
  findCalendary,
  actualizeCalendary,
  eraseCalendary,
} from "../services/calendary.service";
import { handleHttp } from "../utils/error.handle";

const getCalendary = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await findCalendary(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEM");
  }
};
const getCalendaries = async (req: Request, res: Response) => {
  try {
    const response = await findCalendaries();
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GETS_ITEM");
  }
};
const updateCalendary = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await actualizeCalendary(id, body);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_ITEM");
  }
};
const postCalendary = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await createCalendary(body);
    res.send(responseItem);
  } catch (e) {
    handleHttp(res, "ERROR_CREATE_ITEM", e);
  }
};
const deleteCalendary = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await eraseCalendary(id);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_ITEM");
  }
};

export { getCalendary, getCalendaries, updateCalendary, postCalendary, deleteCalendary };
