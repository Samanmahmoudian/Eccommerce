import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Client, ClientSchema } from './client.model';

@Module({
  imports:[MongooseModule.forFeature([{name:'Client' , schema:ClientSchema}])],
  providers: [ClientService],
  controllers: [ClientController],
  exports:[ClientService]
  
})
export class ClientModule {}
