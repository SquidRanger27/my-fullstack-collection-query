export function up(knex) {
  return knex.schema.createTable('movies', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.integer('personal_rating')
  })
}

export function down(knex) {
  return knex.schema.dropTable('movies')
}
