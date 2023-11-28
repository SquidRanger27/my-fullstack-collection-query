export async function seed(knex) {
  await knex('cheeses').del()
  await knex('users').del()
  await knex('favourite_cheeses').del()
}
