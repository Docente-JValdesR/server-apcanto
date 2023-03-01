import { Schema, Types, model, Model } from "mongoose";
import { Activity } from "../interfaces/activity.interface";

const ActivitySchema = new Schema<Activity>(
  {
    titulo: { type: String },
    coordinadores: { type: Array, default: [] },
    descripcion: { type: String },
    imagen: { type: Array, default: [] },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ActivityModel = model("activity", ActivitySchema);
export default ActivityModel;
