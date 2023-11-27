/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('products').del()
  await knex('products').insert([
    {product_name: "Coca-Cola Zero Sugar Soft Drink Cans - 330ml (24 Pack)",product_price: "32.99",product_image:"Coca-Cola Zero Sugar Soft Drink Cans - 330ml (24 Pack).jpg",product_type:"Soft Drink"},
    {product_name: "Monster Energy Drink - Zero Ultra (500ml)",product_price: "78.99",product_image:"Monster Energy Drink - Zero Ultra (500ml).jpg",product_type:"Ënergy Drink"},
    {product_name: "Pepsi Max Cans - 330ml (24 Pack)",product_price: "24.99",product_image:"Pepsi Max Cans - 330ml (24 Pack).jpg",product_type:"Soft Drink"},
    {product_name: "Fanta Soft Drink Cans - 330ml (24 Pack)",product_price: "32.99",product_image:"Fanta Soft Drink Cans - 330ml (24 Pack).jpg",product_type:"Soft Drink"},
    {product_name: "V 500ml Can (12 pack)",product_price: "48.99",product_image:"V 500ml Can (12 pack).jpeg",product_type:"Energy Drink"},
  ])
}
