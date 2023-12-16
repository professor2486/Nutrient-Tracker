import mongoose, { Schema } from "mongoose";

const foodSchema = new Schema({
 id: Number,
  name: String,
  serving: Number,
  protein: Number,
  calories: Number,
  sugar: Number,
  category: String
});

export const userfood = mongoose.model("userfood", foodSchema);

