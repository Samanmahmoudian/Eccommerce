import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema()
export class Clerk extends Document {
  @Prop({ unique: true  , required:true})
  Username: string;

  @Prop({ unique: true , required:true})
  Id: number;
}

export const ClerkSchema = SchemaFactory.createForClass(Clerk);
