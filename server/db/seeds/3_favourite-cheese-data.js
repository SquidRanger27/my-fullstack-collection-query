export async function seed(knex) {
  await knex('favourite_cheeses').insert([
    { id: 1, cheese_id: 'rowValue1', user_id: 'rowValue2' },
  ])
}
