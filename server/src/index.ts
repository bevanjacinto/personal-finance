//kTuLOqdu6H8qzSuP
import express, { Express } from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });
const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const mongoURI: string = process.env.MONGO_URI as string;

mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected to Mongodb"))
  .catch((err) => console.log("Failed to connect", err));

app.use("/financial-records", financialRecordRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
