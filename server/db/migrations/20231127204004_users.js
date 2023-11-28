export function up(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id')
    table.varchar('email')
    table.varchar('auth0_id')
    table.varchar('given_name')
    table.varchar('family_name')
  })
}

export function down(knex) {
  return knex.schema.dropTable('users')
}
