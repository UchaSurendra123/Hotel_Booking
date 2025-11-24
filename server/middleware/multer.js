// import multer from "multer";
// import path from "path";

// // Storage config
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/");
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + "-" + file.originalname;
//     cb(null, uniqueSuffix);
//   },
// });

// // File filter (accept images + pdf)
// const fileFilter = (req, file, cb) => {
//   const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];

//   if (allowedTypes.includes(file.mimetype)) {
//     cb(null, true);
//   } else {
//     cb(new Error("Invalid file type"), false);
//   }
// };

// const upload = multer({
//   storage: storage,
//   fileFilter: fileFilter,
// });

// export default upload;




















import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");   // save EVERYTHING directly in uploads folder
  },
  filename(req, file, cb) {
  const ext = path.extname(file.originalname);
  const base = path.basename(file.originalname, ext);

  // Remove spaces from filenames
  const safeBase = base.replace(/\s+/g, "_");

  const uniqueName = `${safeBase}-${Date.now()}${ext}`;
  cb(null, uniqueName);
}

});

const upload = multer({ storage });

export default upload;
