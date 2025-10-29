import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, required: true },
  password: String,
  image: { type: String, default: "" },
});

const User = mongoose.model("User", userSchema);
export default User;
