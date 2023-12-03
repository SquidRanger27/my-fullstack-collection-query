export async function seed(knex) {
    await knex('games').del()
    await knex('games').insert([
      {
        title: "The Binding Of Isaac",
        releaseDate: "31/03/2022",
        hoursPlayed: 433,
        rating: 10,
      },
      {
        title: "Noita",
        releaseDate: "16/10/2020",
        hoursPlayed: 250,
        rating: 10,
      },
      {
        title: "League of Legends",
        releaseDate: "27/10/2009",
        hoursPlayed: 700,
        rating: 0,
      },
    ])
  }
  