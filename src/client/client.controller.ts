import { Body, Controller, Post } from '@nestjs/common';
import { ClientDTO } from './clientDTO';
import { ClientService } from './client.service';

@Controller()
export class ClientController {
  constructor(private readonly clientService: ClientService) {}
  @Post('clientsignup')
  async clientSignin(@Body() body:ClientDTO){
    this.clientService.clinetSignup(body)
  }
  @Post('clientlogin')
  async clientFinder(@Body() body:ClientDTO){
    await this.clientService.clientLogin(body)
  }

}
