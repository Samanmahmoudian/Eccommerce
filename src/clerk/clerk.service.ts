import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Clerk } from './clerk.model';
import { Model } from 'mongoose';
import { ClerkDTO } from './clerkDTO';

@Injectable()
export class ClerkService {
    constructor(@InjectModel('Clerk') private clerkModel:Model<Clerk>){}
    async clientSignup(x:ClerkDTO){
        const newClerk = await this.clerkModel.create(x)
    }
}
