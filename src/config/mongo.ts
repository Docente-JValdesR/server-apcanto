import "dotenv/config";
import { connect } from "mongoose";

async function dbConnect(): Promise<void> {
  const DB_URI = <string>process.env.DB_URI || "mongodb://localhost:27017/development";
  await connect(DB_URI);
}

export default dbConnect;
