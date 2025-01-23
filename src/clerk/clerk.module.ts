import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClerkSchema } from './clerk.model';
import { ClerkService } from './clerk.service';
import { ClerkController } from './clerk.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Clerk', schema: ClerkSchema }])],
  controllers: [ClerkController],
  providers: [ClerkService],
})
export class ClerkModule {}
