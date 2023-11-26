import request from "superagent";
import { NewProducts } from "../../models/newProducts";

const route = '/api/v1/products'
export async function getAllProductsAPI(){
  try{
    const response = await request.get(route)
    return response.body
  }
  catch(e){
    console.error(e.message)
  }
  
}
const adminRoute = '/api/v1/admin'
export async function addProducts(picture:string,inputs:NewProducts){
  try{
    const response = await request.post(adminRoute).send({picture,inputs})
    return response
  }catch(e){
    throw new Error(`An error occurred while adding the quiz`)
  }
}