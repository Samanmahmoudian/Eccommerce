import { Module } from '@nestjs/common';
import { DatabaseConfigModule } from './database-config/database-config.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientModule } from './client/client.module';
import { ClerkModule } from './clerk/clerk.module';
import { ProductModule } from './product/product.module';
import { MulterModule } from '@nestjs/platform-express';



@Module({
  imports: [DatabaseConfigModule,MongooseModule.forRoot('mongodb://127.0.0.1:27017/MainServer'), 
    ClientModule, ClerkModule, ProductModule,],
})
export class AppModule {}
