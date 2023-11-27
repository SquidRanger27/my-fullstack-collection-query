import express from "express";
import * as db from '../db/db'
const router = express.Router()
//api/v1/todo
router.get('/',async(req,res)=>{
  const response = await db.getTodos()
  res.json(response)
})

export default router