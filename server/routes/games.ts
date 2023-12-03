import express from "express"
import * as db from '../db/db.ts' 
const router = express.Router()



router.get(`/games`, async (req, res) =>{
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