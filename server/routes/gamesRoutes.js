import express from 'express';
import { getGames, addGame, updateGame, deleteGame } from '../db/db.ts';

const router = express.Router();

router.get('/games', async (req, res) => {
  try {
    const games = await getGames();
    res.json(games);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/games', async (req, res) => {
  try {
    const newGame = req.body;
    const addedGame = await addGame(newGame);
    res.json(addedGame);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.put('/games/:id', async (req, res) => {
  try {
    const gameId = parseInt(req.params.id, 10);
    const updatedGame = req.body;
    await updateGame(gameId, updatedGame);
    res.send('Game updated successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.delete('/games/:id', async (req, res) => {
  try {
    const gameId = parseInt(req.params.id, 10);
    await deleteGame(gameId);
    res.send('Game deleted successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

export default router;
