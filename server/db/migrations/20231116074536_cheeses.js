export function up(knex) {
  return knex.schema.createTable('cheeses', (table) => {
    table.increments('id')
    table.integer('cheese_box')
    table.varchar('name')
    table.varchar('maker')
    table.varchar('description')
    table.varchar('region')
    table.varchar('type_of_milk')
  })
}

export function down(knex) {
  return knex.schema.dropTable('cheeses')
}
