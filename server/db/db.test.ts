//db.test.ts

// @vitest-environment node
import { describe, it, expect, beforeAll, beforeEach, afterAll } from 'vitest'
import connection from './connection'
import { getAllCheeses, addCheeseToDb } from './db'

beforeAll(async () => {
  await connection.migrate.latest()
})

beforeEach(async () => {
  await connection.seed.run()
})

afterAll(async () => {
  await connection.destroy()
})

describe('getCheeses', () => {
  it('gets all cheeses from the database', async () => {
    //ARRANGE
    const expectedCheeses = await connection('cheese').select()

    //ACT
    const actualCheeses = await getAllCheeses()

    //ASSERT
    expect(actualCheeses).toStrictEqual(expectedCheeses)
  })
})

describe('addCheese', () => {
  it('adds a cheese to the database', async () => {
    //ARRANGE
    const cheeseToAdd = {
      name: 'Test',
      description: 'Test',
      comment: 'Test',
      rating: 1,
    }
    //ACT
    await addCheeseToDb(cheeseToAdd)

    //ASSERT
    const cheesesInDb = await getAllCheeses()
    const addedCheese = cheesesInDb.find(
      (cheese) => cheese.name === cheeseToAdd.name
    )

    expect(addedCheese?.name).toBe(cheeseToAdd.name)
    expect(addedCheese?.description).toBe(cheeseToAdd.description)
    expect(addedCheese?.comment).toBe(cheeseToAdd.comment)
    expect(addedCheese?.rating).toBe(cheeseToAdd.rating)
  })
})
