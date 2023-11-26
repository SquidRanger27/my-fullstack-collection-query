import connection from "./connection"
import { NewProducts } from '../../models/newProducts'
export function displayProducts(){
  return connection('products').select()
}


export function insertProducts(input:NewProducts){
 
  return connection('products')
  .insert(input)
  .returning(['product_name','product_price','product_image','product_type'])
  
  

}

// .insert([{"product_name":product_name,"product_price":product_price,"product_image":product_image,"product_type":product_type}])
  // product_name: string,product_price: number,product_image: string ,product_type: string
  // const dataToInsert = {product_image,inputs}
  // const data = {
  //   product_name:asdf.productName,
  //   product_price:asdf.productPrice,
  //   product_image:asdf.productImage,
  //   product_type:asdf.productType
  // }
  // const data = {
  //   product_name:input.product_name,
  //   product_price:input.product_price,
  //   product_image:input.product_image,
  //   product_type:input.product_type,

  // }