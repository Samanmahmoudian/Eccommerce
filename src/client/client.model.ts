import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { createConnection, Document } from 'mongoose';
import * as bcrypt from 'bcrypt'
import * as AutoIncrementFactory from 'mongoose-sequence';


@Schema()
export class Client extends Document {
  @Prop({ unique: true  , required:true})
  Username: string;

  @Prop({required:true})
  Password: string;

  @Prop({ unique: true})
  Id: number;

}
const connection = createConnection('mongodb://127.0.0.1:27017/MainServer')
const AutoIncrement = AutoIncrementFactory(connection);

export const ClientSchema = SchemaFactory.createForClass(Client);

ClientSchema.pre('save', async function (next) {
  if (this.isModified('Password') || this.isNew) {
      const salt = await bcrypt.genSalt(10);
      this.Password = await bcrypt.hash(this.Password, salt);
  }
  next();
});

ClientSchema.plugin(AutoIncrement , {inc_field:'Id'})
