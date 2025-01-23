import { Body, Controller, Post, Param, Get, UseGuards, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDTO } from './productDTO';
import { ClientService } from 'src/client/client.service';
import { ProductGuard } from './product.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import {diskStorage} from 'multer'
@Controller()
export class ProductController {
    constructor(private productService:ProductService , private clientService:ClientService){}
    @UseGuards(ProductGuard)
    @Get('products')
    async findAll(){
        
        return this.productService.findAll()
    }

    @Post('product')
    @UseInterceptors(FileInterceptor('File' , {
        storage:diskStorage({
            destination:'./Pics',
            filename: (req , file , cb)=>{
                cb(null , file.originalname)
            }
        })
    }))
    async postProduct(@Body() body:ProductDTO , @UploadedFile() File){
        const product = {...body ,File}
        this.productService.postProduct(body,File)
    }
    
    @Get('clerk_products/:id')
    async findByOwnerId(@Param('id') id:number){
        return await this.productService.findByOwnerId(id)
    }
    @Get('products/:cat')
    async findByCategory(@Param('cat') cat:string){ 
        return this.productService.findByCategory(cat)
    }
}
