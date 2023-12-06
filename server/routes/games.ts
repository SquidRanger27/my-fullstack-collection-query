import express from "express"
import * as db from '../db/db.ts' 
import { isError } from "@tanstack/react-query"
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


router.delete('api/v1/games/:title', async (req, res) =>{
    const title = req.params.title
    try{
        await db.deleteGame(title)
        res.sendStatus(200)
    }
    catch (err){
        res.status(500).send("Error. Could not delete")
    }
})