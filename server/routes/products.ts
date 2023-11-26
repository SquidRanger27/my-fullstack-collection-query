import express from 'express'
import { displayProducts } from '../db/db'

const router = express.Router()


router.get('/',async(req,res)=>{
  const response = await displayProducts()
  res.json(response)
})

export default router