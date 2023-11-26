import express from 'express'
import { displayProducts } from '../db/db'

const router = express.Router()

//api/v1/products
router.get('/',async(req,res)=>{
  const response = await displayProducts()
  console.log("get",response)
  res.json(response)
})


export default router