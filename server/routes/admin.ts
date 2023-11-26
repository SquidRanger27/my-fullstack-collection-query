import express from 'express'
import { insertProducts ,displayProducts} from '../db/db.ts'
import multer from 'multer'
const router = express.Router()
router.use(express.urlencoded({extended:true}))
router.use(express.json())
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

const upload = multer({dest: 'public'})
// //api/v1/admin
router.get('/',async(req,res)=>{
  const response = await displayProducts()
  console.log("get",response)
  res.json(response)
})

router.post('/',upload.single('product_image'),async(req,res)=>{
  try {
   
    const input = req.body
    const response = await insertProducts(req.file,input)
    res.status(200).send(response)
    
  } catch (error) {
    console.error(error);
    res.status(500).send("broken")
  }
})

export default router

