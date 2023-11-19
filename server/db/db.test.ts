//db.test.ts

// @vitest-environment node
import { describe, it, expect, beforeAll, beforeEach, afterAll } from 'vitest'
import connection from './connection'
import { getAllCheeses } from './db'

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
