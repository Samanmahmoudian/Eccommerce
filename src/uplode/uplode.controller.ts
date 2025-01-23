import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';


@Controller()
export class UploadController {
  @Post('file')
  @UseInterceptors(FileInterceptor('File', {
    storage: diskStorage({
      destination: './Pics',
      filename: (req, file, cb) => {
        cb(null, file.originalname); 
      }
    })
  }))
  uploadFile(@UploadedFile() file) {
    console.log(file);
  }
}
