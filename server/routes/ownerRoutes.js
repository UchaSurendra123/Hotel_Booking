// import express from "express";
// import upload from "../middleware/multer.js";
// import { registerOwner } from "../controllers/ownerController.js";

// const router = express.Router();

// router.post(
//   "/register-owner",
//   upload.fields([
//     { name: "uploadImages", maxCount: 10 },
//     { name: "uploadDocuments", maxCount: 10 }
//   ]),
//   registerOwner
// );

// export default router;































import express from "express";
import upload from "../middleware/multer.js";
import { registerOwner, getAllOwners } from "../controllers/ownerController.js";

const router = express.Router();

// Register Owner
router.post(
  "/register-owner",
  upload.fields([
    { name: "uploadImages", maxCount: 10 },
    { name: "uploadDocuments", maxCount: 10 },
  ]),
  registerOwner
);

// ⭐ Get all owners list
router.get("/owners", getAllOwners);



export default router;
