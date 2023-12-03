
export function up(knex) {
  return knex.schema.createTable('drivers', (table) => {
    table.increments('id')
    table.varchar('name')
    table.varchar('team')
    table.varchar('championships')
  })
}


export function down(knex) {
  return knex.schema.dropTable('drivers')
}
