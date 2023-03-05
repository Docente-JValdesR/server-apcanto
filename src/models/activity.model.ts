import { Schema, Types, model, Model } from "mongoose";
import { Activity } from "../interfaces/activity.interface";

const ActivitySchema = new Schema<Activity>(
  {
    userId:{type: String},
    titulo: { type: String },
    coordinadores: { type: [String] },
    descripcion: { type: String },
    imagen: { type: [String] },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ActivityModel = model("activity", ActivitySchema);
export default ActivityModel;
