import { Get, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './product.model';
import { ProductDTO } from './productDTO';
import * as fs from 'fs';


@Injectable()
export class ProductService {
  constructor(@InjectModel('Product') private productModel:Model<Product>){}
  nextId = null
  async autoIncreament(){
    this.nextId = this.productModel.findOne({CreatedAt:-1})
    this.nextId += 1
  }
  
  async findAll(){
  const products = await this.productModel.find()
  return products
  }

  async postProduct(body:ProductDTO){
    let product = body
    
    console.log(product)
    await this.productModel.create(product).then(()=>{

    }).catch(err=>{
      console.log(err)
    })
    console.log(product)
  }

  async findByOwnerId(x:number){
    const products = await this.productModel.find({OwnerId:x})
    if(products){
      return products
    }else{
      console.log('wrong')
    }
  }
  async findByCategory(x:string){
    return await this.productModel.find({Category:x})
  }
  async productImage(id:number){
    const product = await this.productModel.findOne({ProductId:id})
    return product.ImagePath
  }
}
