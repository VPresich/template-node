import multer from 'multer';
import path from 'path';

const tempDir = path.resolve('src', 'temp');
const multerConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, tempDir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
  limits: { filesize: 2048 },
});

//upload.array('image', 8);
//upload.fields([{name: "image", maxCount: 1}, {name: "cover", maxCount: 2}]);
//upload.single('image');

const upload = multer({ storage: multerConfig });
export default upload;
