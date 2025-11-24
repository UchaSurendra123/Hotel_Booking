// import mongoose from "mongoose";

// const ownerSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     email: { type: String, required: true },
//     phoneNo: { type: String, required: true },
//     country: { type: String, required: true },
//     nic: { type: String, required: true },
//     hotelName: { type: String, required: true },
//     registrationNo: { type: String, required: true },
//     address: { type: String, required: true },
//     facilities: { type: String, required: true },

//     uploadImages: {
//       type: [String],   // array of image filenames
//       required: false,
//     },
//     uploadDocuments: {
//       type: [String],   // array of PDF filenames
//       required: false,
//     },
//   },
//   { timestamps: true }
// );

// export default mongoose.model("Owner", ownerSchema);


















import mongoose from "mongoose";

const ownerSchema = new mongoose.Schema(
  {
    // 🔹 Owner Details
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNo: { type: String, required: true },
    country: { type: String, required: true },
    nic: { type: String, required: true },

    // 🔹 Hotel Details
    hotelName: { type: String, required: true },
    registrationNo: { type: String, required: true },
    address: { type: String, required: true },
    facilities: { type: String, required: true },

    // 🔹 Optional Uploads
    uploadImages: {
      type: [String],
      default: [],
    },
    uploadDocuments: {
      type: [String],
      default: [],
    },

    // 🔹 Rooms
    rooms: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

// 🔹 Force the collection name = "owners"
const Owner = mongoose.model("owners", ownerSchema);

export default Owner;
