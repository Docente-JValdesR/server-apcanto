import { Schema, Types, model, Model } from "mongoose";
import { Item } from "../interfaces/item.interface";

const ItemSchema = new Schema<Item>(
  {
    titulo: { type: String },
    subtitulo: { type: String },
    descripcion: { type: String },
    categoria: { type: String },
    imagen: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ItemModel = model("items", ItemSchema);
export default ItemModel;
