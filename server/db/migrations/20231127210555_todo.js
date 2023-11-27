/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex){
 return knex.schema.createTable('todo',(table)=>{
      table.increments('id')
      table.string('description')
      table.string('type')
      table.integer('status')
 })

 
}
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex){
  return knex.schema.dropTable('todo')
}