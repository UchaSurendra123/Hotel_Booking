import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");   
  },
  filename(req, file, cb) {
  const ext = path.extname(file.originalname);
  const base = path.basename(file.originalname, ext);

  
  const safeBase = base.replace(/\s+/g, "_");

  const uniqueName = `${safeBase}-${Date.now()}${ext}`;
  cb(null, uniqueName);
}

});

const upload = multer({ storage });

export default upload;
