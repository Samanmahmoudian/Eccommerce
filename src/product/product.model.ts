import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { File } from 'buffer';
import { Document, createConnection } from 'mongoose';
import { buffer } from 'stream/consumers';
import { ProductService } from './product.service';
import * as AutoIncrementFactory from 'mongoose-sequence';

@Schema()
export class Product extends Document {

  @Prop({ required: true })
  Name: string;


  @Prop()
  OwnerId: number;

  @Prop({required:true})
  Category:string

  @Prop({unique:true})
  ProductId:number

  @Prop()
  ImageName:string

  @Prop()
  ImagePath:string

  @Prop({default:Date.now})
  CreatedAt:Date
}

const connection = createConnection('mongodb://127.0.0.1:27017/MainServer')
const AutoIncrement = AutoIncrementFactory(connection);
export const ProductSchema = SchemaFactory.createForClass(Product);
ProductSchema.plugin(AutoIncrement , {inc_field:'ProductId'})