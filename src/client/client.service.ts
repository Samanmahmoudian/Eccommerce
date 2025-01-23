import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ClientDTO } from './clientDTO';
import { Client } from './client.model';

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
    const cient = x
    const real_data = await this.clientModel.findOne(x)
    if(real_data){
      if(x.Password == real_data.Password){
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
