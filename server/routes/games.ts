import express from 'express'
import * as dbGames from '../db/games'

const router = express.Router()


router.get('/', async (req, res) => {
  try {
    const games = await dbGames.getAllGamesDb()
    res.json(games)
  } catch (error) {
    console.error(error)
    res.status(500).send('Yo, where the games at?')
  }
})


router.get('/:id', async (req, res) => {
  const gameId = Number(req.params.id)
  try {
    const game = await dbGames.getGameByIdDb(gameId)
    res.json(game)
  } catch (error) {
    console.error(error)
    res.status(500).send('Yo, where the games at?')
  }
})


router.post('/', async (req, res) => {
  const newGame = req.body
  console.log(newGame)
  if (!req.body) {
    res.status(400).send('No such thing as a Free Game')
    return
  }
  try {
    const addNewGame = await dbGames.addGameDb(newGame)
    res.status(200).json(addNewGame[0])
  } catch (error) {
    res.status(500).send('Can not add games that do not exist, maybe you should make it')
  }
})


router.delete('/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  if (isNaN(id)) {
    res.status(400).send('Silly Sausage: ID must always be a number')
    return
  }

  try {
    await dbGames.deleteGameDb(id)
    res.sendStatus(200)
  } catch (error) {
    res.status(500).send('Unable to Delete Game, must be too important!')
  }
})

export default router