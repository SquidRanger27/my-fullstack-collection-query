import express from "express"
import * as db from '../db/db.ts' 
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


router.delete(`/:title`, async (req, res) =>{
    try{
        const title = req.params.title
        await db.deleteGame(title)
        res.sendStatus(200)
    }
    catch (err){
        res.status(500).send("Error. Could not delete")
    }
})