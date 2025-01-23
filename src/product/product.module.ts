import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './product.model';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ClientModule } from 'src/client/client.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]) , ClientModule],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
