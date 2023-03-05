import { Schema, Types, model, Model } from "mongoose";
import { Calendary } from "../interfaces/calendary.interface";

const CalendarySchema = new Schema<Calendary>(
  {
    tipo: { type: String },
    asignatura: { type: String },
    curso: { type: String },
    descripcion: { type: String },
    profesor: { type: String },
    bloque: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const CalendaryModel = model("calendaries", CalendarySchema);
export default CalendaryModel;
