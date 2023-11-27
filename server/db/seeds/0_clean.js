export async function seed(knex) {
  await knex('movies').del()
}
