export function up(knex) {
  return knex.schema.createTable('courses', (table) => {
    table.increments('id')
    table.string('name')
    table.string('website_name')
    table.string('host')
    table.string('field')
    table.integer('cost')
    table.string('link')
    table.boolean('complete')
  })
}

export function down(knex) {
  return knex.schema.dropTable('courses')
}
