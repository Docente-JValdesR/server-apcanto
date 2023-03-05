import { NextFunction, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { RequestExt } from "../interfaces/req-ext";
import { verifyToken } from "../utils/jwt.handle";

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || "";
    const jwt = jwtByUser.split(" ").pop();
    const isUser = verifyToken(`${jwt}`);
    if (!isUser) {
      res.status(401);
      res.send("TOKEN_INVALID");
    } else {
      req.user = isUser as JwtPayload;;
      next();
    }
  } catch (e) {
    res.status(400);
    res.send("SESSION_INVALID");
  }
};

export { checkJwt };
