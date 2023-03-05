import { Calendary } from "../interfaces/calendary.interface";
import CalendaryModel from "../models/calendary.model";

const createCalendary = async (Calendary: Calendary) => {
  const responseInsert = await CalendaryModel.create(Calendary);
  return responseInsert;
};
const findCalendaries = async () => {
  const responseItem = await CalendaryModel.find({});
  return responseItem;
};
const findCalendary = async (id: string) => {
  const responseItem = await CalendaryModel.findOne({ _id: id });
  return responseItem;
};
const actualizeCalendary = async (id: string, data: Calendary) => {
  const responseItem = await CalendaryModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return responseItem;
};
const eraseCalendary = async (id: string) => {
  const responseItem = await CalendaryModel.remove({ _id: id });
  return responseItem;
};
export { createCalendary, findCalendaries, findCalendary, actualizeCalendary, eraseCalendary };
