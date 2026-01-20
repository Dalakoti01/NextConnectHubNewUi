import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true,"Full Name is required"],
    },
    email: {
      type: String,
      required: [true,"Email is required"],
    },
    phoneNumber: {
      type: Number,
      required: [true,"PhoneNumber is required"],
    },
    subject: {
      type: String,
      required: [true,"Subject is required"],
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model('User',userSchema)
export default User
