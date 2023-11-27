export async function seed(knex) {
  await knex('courses').del()
}
