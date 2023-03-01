import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";

const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || "";
    const jwt = jwtByUser.split(" ").pop();
    const isUser = verifyToken(`${jwt}`);
    if (!isUser) {
      res.status(401);
      res.send("TOKEN_INVALID");
    } else {
      next();
    }
  } catch (e) { 
    res.status(400);
    res.send("SESSION_INVALID");
  }
};

export { checkJwt };
