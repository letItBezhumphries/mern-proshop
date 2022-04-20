import path from "path";
import express from "express";
import multer from "multer";

const router = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

function checkFileType(file, callback) {
  // creating an expression of the fileTypes that are acceptable
  const fileTypes = /jpg|jpeg|png/;
  // this extname will either be true or false if it doesn't match against the fileTypes
  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
  // need to check the mimeType
  const mimetype = fileTypes.test(file.mimetype);

  // want to check that both of these are true before moving forward with calling callback function
  if (extname && mimetype) {
    return callback(null, true);
  } else {
    callback("Images only!");
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

router.post("/", upload.single("image"), (req, res) => {
  res.send(`/${req.file.path}`);
});

export default router;
