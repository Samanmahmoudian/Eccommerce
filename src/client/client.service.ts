import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ClientDTO } from './clientDTO';
import { Client } from './client.model';
import * as bcrypt from 'bcrypt'
@Injectable()
export class ClientService {
  constructor(@InjectModel('Client') private readonly clientModel: Model<Client>) {}
  permission = false

  async per(){
    return this.permission
  }
  async clinetSignup(x:ClientDTO){
    const newClient = await this.clientModel.create(x)
    console.log(newClient)
  }
  async clientLogin(x:ClientDTO){

    const real_data = await this.clientModel.findOne({Username:x.Username})
    if(real_data){
      if(await bcrypt.compare(String(x.Password) , String(real_data.Password))){
        console.log('done')
        this.permission = true
      }else{
        console.log('wrong')
        this.permission = false
      }
    }else{
      console.log('wrong')
      this.permission = false
    }

  }


}
