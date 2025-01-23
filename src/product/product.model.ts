import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { File } from 'buffer';
import { Document } from 'mongoose';
import { buffer } from 'stream/consumers';

@Schema()
export class Product extends Document {
  @Prop({ required: true })
  Name: string;


  @Prop()
  OwnerId: number;

  @Prop({required:true})
  Category:string

  @Prop({unique:true , required:true})
  Id:number

  @Prop({required:true , type:File})
  File:File
}

export const ProductSchema = SchemaFactory.createForClass(Product);