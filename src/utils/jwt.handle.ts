import { sign, verify } from "jsonwebtoken";
import { User } from "../interfaces/user.interface";
const JWT_SECRET = process.env.JWT_SECRET || "token.00001";

const generateToken = async (email:string, cargo:string) => {
  const jwt = sign({ email, cargo }, JWT_SECRET, {
    expiresIn: "24h",
  });
  return jwt;
};

const verifyToken = (jwt: string) => {
  const isOk = verify(jwt, JWT_SECRET);
  return isOk;
};

export { generateToken, verifyToken };
