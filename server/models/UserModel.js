// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema(
//   {
//     username: { type: String },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     resetPasswordToken: String,
//     resetPasswordExpire: Date,
//   },
//   { timestamps: true }
// );

// const User = mongoose.model("User", userSchema);
// export default User;






















import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    email: {
      type: String,
      trim: true,
      unique: true,
      sparse: true,   // allows multiple null/empty emails
      default: "",
    },

    password: {
      type: String,
      default: null,   // important for Google login
    },

    name: { type: String, default: "" },
    phone: { type: String, default: "" },
    country: { type: String, default: "" },

    // 👇 Google Login Support
    picture: { type: String, default: "" },
    authType: {
      type: String,
      enum: ["local", "google"],
      default: "local",
    },

    // 👇 Forgot / Reset Password Fields
    resetPasswordToken: { type: String },
    resetPasswordExpire: { type: Date },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);




















// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema(
//   {
//     name: { type: String },
//     email: { type: String, required: true, unique: true },
//     phone: { type: String },
//     country: { type: String },
//     username: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     picture: { type: String }, // for Google login
//     authType: { type: String, default: "local" },
//     resetPasswordToken: String,
//     resetPasswordExpire: Date,
//   },
//   { timestamps: true }
// );

// export default mongoose.model("User", userSchema);
