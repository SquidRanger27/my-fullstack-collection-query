/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('PCGamesCollection').del()
  await knex('PCGamesCollection').insert([
    { title: 'Hearthstone', developer: 'Blizzard Entertainment', year: 2014 },
    { title: 'Overwatch', developer: 'Blizzard Entertainment', year: 2016 },
    {
      title: 'World of Warcraft',
      developer: 'Blizzard Entertainment',
      year: 2004,
    },
    {
      title: 'Might and Magic VI: The Mandate of Heaven',
      developer: 'New World Computing',
      year: 1998,
    },
    { title: 'Doom', developer: 'id Software', year: 1993 },
    { title: 'Commander Keen', developer: 'id Software', year: 1990 },
    { title: 'Wolfenstein 3D', developer: 'id Software', year: 1992 },
    { title: 'Theme Park', developer: 'Bullfrog Productions', year: 1994 },
    {
      title: 'Heroes of Might and Magic 2',
      developer: 'New World Computing',
      year: 1996,
    },
    {
      title: 'Heroes of Might and Magic 3',
      developer: 'New World Computing',
      year: 1999,
    },
    { title: 'Star Control 2', developer: 'Toys for Bob', year: 1992 },
    { title: 'Star Control 3', developer: 'Accolade', year: 1996 },
    { title: "King's Quest VI", developer: 'Sierra On-Line', year: 1992 },
  ])
}
