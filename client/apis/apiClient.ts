import request from "superagent";

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