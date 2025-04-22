import { Schema, models, model } from "mongoose";

const UserSchema = new Schema(
  {
    clerkId: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
    },
    username: String,
    firstName: String,
    lastName: String,
    imageUrl: String,
  },
  { timestamps: true }
);

const User = models.User || model("User", UserSchema);
export default User;
