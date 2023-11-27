export async function seed(knex) {
  await knex('movies').insert([
    {
      id: 1,
      name: 'The Matrix',
      description: 'Neo, a computer programmer and hacker, has always questioned the reality of the world around him. His suspicions are confirmed when Morpheus, a rebel leader, contacts him and reveals the truth to him.',
      director: 'Lilly and Lana Wachowskis',
      lead_actor: 'Keanu Reeves and Carrie-Anne Moss',
    },
    {
      id: 2,
      name: 'Fight Club',
      description: 'Unhappy with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. Soon, their venture spirals down into something sinister.',
      director: 'David Fincher',
      lead_actor: 'Ed Norton and Brad Pitt',
    },
    {
      id: 3,
      name: 'Sleepy Hollow',
      description: 'Ichabod Crane, a police officer, gets transferred to the Westchester County hamlet of Sleepy Hollow, New York for using unacceptable methods of investigation.',
      director: 'Tim Burton',
      lead_actor: 'Johnny Deep and Christina Ricci',
    },
    {
      id: 4,
      name: 'Thomas Crown Affair',
      description: 'Thomas Crown has everything a mortal man could ask for, which is why his life is devoid of excitement. He begins stealing works of art for sheer thrill. However, investigator Catherine is on to him.',
      director: 'John McTeirnan',
      lead_actor: 'Pierce Brosnan and Rene Russo',
    },
  ])
}
