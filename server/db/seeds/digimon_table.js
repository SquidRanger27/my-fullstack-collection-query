/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('digimons').del()
  await knex('digimons').insert([
    { id: 1, digimon_name: 'Agumon', digimon_type: 'Reptile' },
    { id: 2, digimon_name: 'Gabumon', digimon_type: 'Reptile' },
    { id: 3, digimon_name: 'Patamon', digimon_type: 'Mammal' },
    { id: 4, digimon_name: 'Palmon', digimon_type: 'Plant' },
    { id: 5, digimon_name: 'Biyomon', digimon_type: 'Bird' },
    { id: 6, digimon_name: 'Tentomon', digimon_type: 'Insect' },
    { id: 7, digimon_name: 'Gomamon', digimon_type: 'Sea Beast' },
    { id: 8, digimon_name: 'Gatomon', digimon_type: 'Beast' },
  ])
}
