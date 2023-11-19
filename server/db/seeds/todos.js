export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('task').del()

  // Inserts seed entries
  await knex('task').insert([
    {
      title: 'Set up DB',
      details: 'Make migration and seed files. Run them. Verify DB working.',
      dateAdded: 1495083077243,
      isStretch: 1,
      colour: 'e9967a',
    },
    {
      title: 'Get lunch!',
      details: 'Go outside and get some lunch',
      dateAdded: 1495083077243,
      isStretch: 0,
      colour: '33D7FF',
    },
    {
      title: 'Basic CSS',
      dateAdded: 1495083077243,
      details: 'Ensure tasks are visible',
      isStretch: 1,
      colour: 'e9967a',
    },
    {
      title: 'Pat cat',
      dateAdded: 1495083077243,
      details: 'Pat the cat',
      isStretch: 0,
      colour: '33D7FF',
    },
  ])
}
