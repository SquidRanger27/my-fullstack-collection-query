/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex){
  return knex.schema.createTable('products',(table)=>{
    table.increments('product_id').primary()
    table.string('product_name')
    table.float('product_price')
    table.string('product_image')
    table.string('product_type')
  })
}
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex){
  return knex.schema.dropTable('products')
}
