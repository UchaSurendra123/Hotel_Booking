import mongoose from "mongoose";

const ownerSchema = new mongoose.Schema(
  {
    
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNo: { type: String, required: true },
    country: { type: String, required: true },
    nic: { type: String, required: true },

    
    hotelName: { type: String, required: true },
    registrationNo: { type: String, required: true },
    address: { type: String, required: true },
    facilities: { type: String, required: true },

    
    uploadImages: {
      type: [String],
      default: [],
    },
    uploadDocuments: {
      type: [String],
      default: [],
    },

   
    rooms: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);


const Owner = mongoose.model("owners", ownerSchema);

export default Owner;
