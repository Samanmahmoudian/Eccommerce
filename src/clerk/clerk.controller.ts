import { Body, Controller, Post } from '@nestjs/common';
import { ClerkService } from './clerk.service';
import { ClerkDTO } from './clerkDTO';


@Controller()
export class ClerkController {
    constructor(private clerkService:ClerkService){}
    @Post('clerksignup')
    async clientSignup(@Body() body:ClerkDTO){
        await this.clerkService.clientSignup(body)
    }
    
}
