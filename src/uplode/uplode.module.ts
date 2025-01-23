import { Module } from '@nestjs/common';
import { UploadController} from './uplode.controller';

@Module({
  controllers: [UploadController]
})
export class UplodeModule {}
