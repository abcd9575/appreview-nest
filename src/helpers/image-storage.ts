import { diskStorage } from 'multer';
import path = require('path');
import { v4 as uuid } from 'uuid';

export const saveImageToStorage = {
  storage: diskStorage({
    destination: './storage/uploads',
    filename: (req, file, cb) => {
      console.log(file);
      const fileExtension: string = path.extname(file.originalname);
      const fileName: string = uuid() + fileExtension;
      cb(null, fileName);
    },
  }),
};
