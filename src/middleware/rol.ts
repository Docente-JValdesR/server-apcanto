import { Response, NextFunction } from "express";
import { RequestExt } from "../interfaces/req-ext";

const rolCheck =
  (cargo: string) => (req: RequestExt, res: Response, next: NextFunction) => {
    try {
      const { user } = req;
      const cargoToken = user?.cargo
      if (cargo === cargoToken) {
        next();
      } else {
        res.status(401);
        res.send("No tienes permiso para esta accion");
      }
    } catch (e) {
      res.status(401);
      res.send("sesion no valida");
    }
  };

export { rolCheck };
