export async function seed(knex) {
  await knex('users').insert([
    {
      id: 1,
      email: 'rowValue1',
      auth0_id: 'rowValue2',
      given_name: 'rowValue3',
      family_name: 'rowValue4',
    },
  ])
}
