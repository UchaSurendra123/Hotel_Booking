// import Owner from "../models/Owner.js";

// export const registerOwner = async (req, res) => {
//   try {
//     console.log("REQ BODY:", req.body);
//     console.log("REQ FILES:", req.files);

//     const imageFiles = req.files?.uploadImages?.map(f => f.filename) || [];
//     const documentFiles = req.files?.uploadDocuments?.map(f => f.filename) || [];

//     const newOwner = new Owner({
//       name: req.body.name,
//       email: req.body.email,
//       phoneNo: req.body.phoneNo,
//       country: req.body.country,
//       nic: req.body.nic,
//       hotelName: req.body.hotelName,
//       registrationNo: req.body.registrationNo,
//       address: req.body.address,
//       facilities: req.body.facilities,
//       uploadImages: imageFiles,
//       uploadDocuments: documentFiles,
//     });

//     await newOwner.save();

//     return res.status(201).json({
//       message: "Owner Registered Successfully",
//       owner: newOwner,
//     });

//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ error: "Failed to register owner" });
//   }
// };



























import Owner from "../models/Owner.js";

// Register a new owner / hotel
export const registerOwner = async (req, res) => {
  try {
    // Ensure fields match frontend EXACTLY
    const imageFiles = req.files?.uploadImages?.map(f => f.filename) || [];
    const documentFiles = req.files?.uploadDocuments?.map(f => f.filename) || [];

    const newOwner = new Owner({
      name: req.body.name,
      email: req.body.email,
      phoneNo: req.body.phoneNo,
      country: req.body.country,
      nic: req.body.nic,

      // Hotel details
      hotelName: req.body.hotelName,
      registrationNo: req.body.registrationNo,
      address: req.body.address,
      facilities: req.body.facilities,

      // Correct image & document fields
      // ✓ Correct fields as per Mongoose model
uploadImages: imageFiles,
uploadDocuments: documentFiles,

    });

    await newOwner.save();

    res.status(201).json({
      message: "Owner Registered Successfully",
      owner: newOwner
    });

  } catch (err) {
    console.error("REGISTER OWNER ERROR:", err);
    res.status(500).json({ error: "Failed to register owner" });
  }
};

// Get all owners (for admin + owner dashboards)
export const getAllOwners = async (req, res) => {
  try {
    const owners = await Owner.find();
    res.status(200).json({ success: true, owners });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

