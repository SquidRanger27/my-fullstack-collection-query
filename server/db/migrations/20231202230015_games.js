/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    await knex.schema.createTable('games', function (table) {
        table.string('title').primary();
        table.timestamp('releaseDate');
        table.integer('hoursPlayed');
        table.integer('rating');
    })
  }
  

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
    await knex.schema.dropTable('games')
  }