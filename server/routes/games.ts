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


router.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    try {
      await deleteGame(id)
      res.sendStatus(200)
    } catch (err) {
      console.log(err)
      res.status(500).send('Could not delete')
    }
  })
  