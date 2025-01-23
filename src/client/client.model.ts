import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';




@Schema()
export class Client extends Document {
  @Prop({ unique: true  , required:true})
  Username: string;

  @Prop({required:true})
  Password: string;

  @Prop({ unique: true , required:true})
  Id: number;
}

export const ClientSchema = SchemaFactory.createForClass(Client);


