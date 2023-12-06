import express from "express"
import * as db from '../db/db.ts' 
import { isError } from "@tanstack/react-query"
import { deleteGame } from "../db/db.ts"
const router = express.Router()



router.get(`/api/v1/games`, async (req, res) =>{
    try{
        const games = await db.getAllGames()
        res.json(games)
    }
    catch (err){
        console.log(err)
        res.status(500).send('Error!')
    }
})

export default router


router.delete('/:title', async (req, res) => {
    const title = (req.params.title)
    try {
      await deleteGame(title)
      res.sendStatus(200)
    } catch (err) {
      console.log(err)
      res.status(500).send('Could not delete')
    }
  })
  