import express from 'express'
import { insertProducts ,displayProducts} from '../db/db.ts'
import multer from 'multer'
const router = express.Router()

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     // Set the destination path where you want to save the uploaded file
//     cb(null, 'public');
//   },
//   filename: function (req, file, cb) {
//     // Use the original file name for the uploaded file
//     cb(null, file.originalname);
//   },
// })

// const upload = multer({storage:storage})
// //api/v1/admin
router.get('/',async(req,res)=>{
  const response = await displayProducts()
  console.log("get",response)
  res.json(response)
})

router.post('/',async(req,res)=>{
  try {
    // const file = req.file;
    // const {product_name,product_price,product_image,product_type} = req.body;
    // const insertData ={
    //   product_name,product_price,product_image,product_type
    // }

    // const product_name = req.body.product_name
    // const product_price = req.body.product_price
    // const product_image = req.body.product_image
    // const product_type = req.body.product_type
    // const response = await insertProducts(product_name,product_price,product_image,product_type);
    // const insertData = {
    //   product_name,
    //   product_price,
    //   product_image,
    //   product_type
    // }
    const input = req.body
    console.log("Input",input);
    const response = await insertProducts(input)
    res.json(response)
    
  } catch (error) {
    console.error(error);
    res.status(500).send("broken")
  }
})

export default router