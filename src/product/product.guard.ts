import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ClientService } from 'src/client/client.service';

@Injectable()
export class ProductGuard implements CanActivate {
  constructor(private clientService:ClientService){}
  
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    let permission = this.clientService.permission
    if(!permission){
      return false
    }else{
      return true;
    }
    
  }
}
