import express from "express";
import upload from "../middleware/multer.js";
import { registerOwner, getAllOwners } from "../controllers/ownerController.js";

const router = express.Router();

router.post(
  "/register-owner",
  upload.fields([
    { name: "uploadImages", maxCount: 10 },
    { name: "uploadDocuments", maxCount: 10 },
  ]),
  registerOwner
);

router.get("/owners", getAllOwners);

export default router;
