import { Schema, Types, model, Model } from "mongoose";
import { News } from "../interfaces/news.interface";

const NewsSchema = new Schema<News>(
  {
    titulo: { type: String },
    descripcion: { type: String },
    imagen: { type: String },
    categoria: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const NewsModel = model("news", NewsSchema);
export default NewsModel;
