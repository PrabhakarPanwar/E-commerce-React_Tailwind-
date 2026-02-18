import multer from "multer";

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `${process.cwd()}/upload`);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

let upload = multer({ storage });

export default upload;
