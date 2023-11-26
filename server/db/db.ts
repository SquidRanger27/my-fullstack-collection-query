import connection from "./connection"
import { NewProducts } from '../../models/newProducts'
export function displayProducts(){
  return connection('products').select()
}


export function insertProducts(picture:string,inputs:NewProducts){

  const filePath = picture;
  return connection('products')
  .insert({
    product_image: filePath,
    ...inputs, // Include other form data
  })
  .returning(['product_name','product_price','product_image','product_type'])
  
}

