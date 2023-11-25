/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('NZ places').del()
  await knex('NZ places').insert([
    {
      id: 1,
      name: 'Wellington',
      description:
        'Wellington, the capital city of New Zealand, is located at the southern tip of the North Island. Nestled between hills and a rugged coastline, Wellington is celebrated for its vibrant arts scene, including theaters, museums, and galleries. The city is also home to the government headquarters and is known for its lively cafe culture.',
      image: 'client/public/Major Cities/wellington.jpg',
    },

    {
      id: 2,
      name: 'Auckland',
      description:
        'Auckland, situated on the North Island, is New Zealand\'s largest city and a bustling economic hub. Known as the "City of Sails," it boasts a stunning harbor filled with yachts and offers a diverse range of cultural attractions, shopping districts, and vibrant nightlife. The iconic Sky Tower dominates the skyline, providing panoramic views of the city and beyond.',
      image: 'client/public/Major Cities/auckland.jpg',
    },
    {
      id: 3,
      name: 'Christchurch',
      description:
        'Christchurch, on the South Island, is the largest city in the South Island and known as the "Garden City" due to its numerous parks and green spaces. The city has undergone significant rebuilding after the 2011 earthquake and now boasts a mix of modern architecture and historic charm. The Avon River winds through the city, offering picturesque boat rides.',
      image: 'client/public/Major Cities/christchurch.jpg',
    },
    {
      id: 4,
      name: 'Hamilton',
      description:
        'Hamilton, located in the Waikato region, is known for its educational institutions, including the University of Waikato. The city is situated along the banks of the Waikato River and offers beautiful gardens, such as the Hamilton Gardens. It is a key agricultural center and a gateway to the Hobbiton movie set, a popular tourist attraction.',
      image: 'client/public/Major Cities/hamilton.jpg',
    },
    {
      id: 5,
      name: 'Dunedin',
      description:
        "Dunedin, on the South Island's southeast coast, has a rich Scottish heritage and is known for its Victorian and Edwardian architecture. The city is home to the University of Otago, New Zealand's oldest university. The Otago Peninsula, just outside Dunedin, is famous for its wildlife, including albatross and penguin colonies, making it a haven for nature enthusiasts.",
      image: 'client/public/Major Cities/dunedin.jpg',
    },
  ])
}
