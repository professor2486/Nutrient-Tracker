import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcrypt';


const userSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  cpassword: {
    type: String,
    require: true,
  },
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    console.log("hi");
    this.password = await bcrypt.hash(this.password, 12); //bcrypt ki hash method--> password la haeh krte
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  next(); // auth.js wala (user.save) call
});

export const User = mongoose.model("User" , userSchema); 