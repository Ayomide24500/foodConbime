import { Schema, Types, model } from "mongoose";
import { iEmailData } from "../utils/interface";

const userEmail = new Schema<iEmailData>(
  {
    email: {
      type: String,
      unique: true,
    },
    // token: {
    //   type: String,
    // },
  },
  { timestamps: true }
);
export default model<iEmailData>("email", userEmail);
