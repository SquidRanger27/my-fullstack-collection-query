/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('characters').del()
  await knex('characters').insert([
    {
      id: 1,
      name: 'Bella Norton',
      alias: 'Salvage',
      image:
        'https://firebasestorage.googleapis.com/v0/b/supe-db.appspot.com/o/lfuf8rmc1r6m?alt=media&token=a49b8b84-c883-423b-a73f-ce636680be01',
    },
    {
      id: 2,
      name: 'Caesarea',
      alias: 'Curtana',
      image:
        'https://firebasestorage.googleapis.com/v0/b/supe-db.appspot.com/o/lfuf8rmb214t?alt=media&token=2e0cdafb-0849-45f3-8c42-16e0c8ee76d7',
    },
    {
      id: 3,
      name: 'Flora Winters',
      alias: 'Shadowbloom',
      image:
        'https://firebasestorage.googleapis.com/v0/b/supe-db.appspot.com/o/lfuf8rmns1k?alt=media&token=8fa7980c-1a97-4bc8-bfa1-522d93aad7c6',
    },
    {
      id: 4,
      name: 'Jack Royale',
      alias: 'Dealer',
      image:
        'https://firebasestorage.googleapis.com/v0/b/supe-db.appspot.com/o/lfuf8rmke5b?alt=media&token=7f7619d9-c379-499f-81fe-17baccd555a2',
    },
    {
      id: 5,
      name: 'Kel Romano',
      alias: 'Cerebrum',
      image:
        'https://firebasestorage.googleapis.com/v0/b/supe-db.appspot.com/o/lfuf8rmp1zwc?alt=media&token=ac211050-3c74-4a61-bfcc-790ee5e6496c',
    },
    {
      id: 6,
      name: 'Taisuke Lee',
      alias: 'Traveller',
      image:
        'https://firebasestorage.googleapis.com/v0/b/supe-db.appspot.com/o/lfuf8rmd10vf?alt=media&token=83a1ffbe-a03c-4797-8332-a83b30cf72ee',
    },
    {
      id: 7,
      name: 'Taylor Harkans',
      alias: 'Libra',
      image:
        'https://firebasestorage.googleapis.com/v0/b/supe-db.appspot.com/o/lfuf8rmnk3d?alt=media&token=9b19b087-c98d-4eae-9be9-d124b2277af4',
    },
    {
      id: 8,
      name: 'Xalvador',
      alias: null,
      image:
        'https://firebasestorage.googleapis.com/v0/b/supe-db.appspot.com/o/lfuf8rmb1zfc?alt=media&token=5b433f85-ed17-4647-9897-3269c28c92d1',
    },
  ])
}
