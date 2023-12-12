/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('PCGamesCollection').del();
  await knex('PCGamesCollection').insert([
    { game: 'Hearthstone', developer: 'Blizzard Entertainment', year: 2014 },
    { game: 'Overwatch', developer: 'Blizzard Entertainment', year: 2016 },
    { game: 'World of Warcraft', developer: 'Blizzard Entertainment', year: 2004 },
    { game: 'Might and Magic VI: The Mandate of Heaven', developer: 'New World Computing', year: 1998 },
    { game: 'Doom', developer: 'id Software', year: 1993 },
    { game: 'Commander Keen', developer: 'id Software', year: 1990 },
    { game: 'Wolfenstein 3D', developer: 'id Software', year: 1992 },
    { game: 'Theme Park', developer: 'Bullfrog Productions', year: 1994 },
    { game: 'Heroes of Might and Magic 2', developer: 'New World Computing', year: 1996 },
    { game: 'Heroes of Might and Magic 3', developer: 'New World Computing', year: 1999 },
    { game: 'Star Control 2', developer: 'Toys for Bob', year: 1992 },
    { game: 'Star Control 3', developer: 'Accolade', year: 1996 },
    { game: "King's Quest VI", developer: 'Sierra On-Line', year: 1992 },
  ]);
};

