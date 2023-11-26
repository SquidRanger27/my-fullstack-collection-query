/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('films', (table) => {
    table.increments('id').primary()
    table.string('title')
    table.string('director')
    table.integer('year')
  })
}

export async function down(knex) {
  await knex.schema.dropTable('films')
}
