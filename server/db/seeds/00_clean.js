export async function seed(knex) {
  //Deletes all existing entries
  await knex('destination').del()
  await knex('NZ places').del()
}
