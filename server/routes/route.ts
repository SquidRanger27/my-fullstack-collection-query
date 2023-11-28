import express from "express";
import * as db from '../db/db'
const router = express.Router()
//api/v1/todo
router.get('/',async(req,res)=>{
  const response = await db.getTodos()
  res.json(response)
})
router.patch('/',async(req,res)=>{
  const status = req.body
  const response = await db.updateStatus(status)
  res.json(response)
})
export default router

router.delete('/',async(req,res)=>{
  const deleteTodo = req.body.id
  const response = await db.deleteTodo(deleteTodo) 
  res.json(response)
})
router.post('/',async(req,res)=>{
  
})