export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('Books').del()
  await knex('Authors').del()
  await knex('Authors_Books').del()
}
