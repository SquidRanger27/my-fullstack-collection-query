import express, { Router } from 'express'
import * as db from '../db/connection.ts'
import * as Path from 'node:path'
import server from '../server.ts'

//Set up our express app to serve static assets(Deployment Requirement)
if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

const router = Router()
// GET /api/v1/verses
router.get('/', async (req, res) => {
  try {
    const verses = await db.getAllVerses()
    res.json(verses)
  } catch (err) {
    res.sendStatus(500)
    console.error((err as any).message)
  }
})

// GET /api/v1/verses/:id
router.get('/:id', async (req, res) => {
  const verseId = parseInt(req.params.id)
  try {
    const verseById = await db.getVerseById(verseId)

    res.json(verseById)
  } catch (err) {
    res.sendStatus(500)
    console.error((err as any).message)
  }
})

// DELETE /api/v1/verses/
router.delete('/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  if (isNaN(id)) {
    res.status(400).send('Bad Request: ID must be a number')
    return
  }

  try {
    await db.deleteVerse(id)
    res.sendStatus(200)
  } catch (err) {
    console.log(err)
    res.status(500).send('Could not delete verse')
  }
})

export default router
