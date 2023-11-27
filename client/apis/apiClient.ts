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
export async function addProducts(text){
  try{
    const response = await request.post(adminRoute).send(text)
    return response.body
  }catch(e){
    throw new Error(`An error occurred while adding product`)
  }
}