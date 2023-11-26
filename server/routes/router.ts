import express from 'express'
import * as db from '../db/db'
import multer from 'multer'

const router = express.Router()

const  storage = multer.diskStorage({
  destination: function(req, file, cb) {
    return cb(null, "public/")
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}_${file.originalname}`)
  }
})

const upload = multer({storage})

//_________________________________________
// GET ALL ARTWORKS AND DETAILS FOR DISPLAY
// /api/v1/artworks

router.get('/', async(req,res)=>{
  try{
    const artworks = await db.getArtOverview()
    res.json(artworks)
  }
  catch(err){
    console.log(err)
    res.status(500).send('could not get artworks')
  }
})




//________________________________________________
// GET ONE ARTWORK USING AN ID
// /api/v1/artworks/:id
router.get('/:id', async(req,res)=>{
  const id = Number(req.params.id)
   if(isNaN(id)){
      res.status(404).send('id must be a number')
      return
   }
  try{
   const artInfo = await db.getArtById(id)
    if(!artInfo){
      res.status(404).send('id could not be found')
    }
    res.json(artInfo)
  }catch(err){
    console.log(err)
    res.status(500).send('could not get artwork info for this id')
  }
})


//__________________________________________________
// ADD NEW ARTWORK 
// /api/v1/artworks
router.post('/', async(req,res)=>{
  try{
    const newArt = await db.addArt(req.body)
    res.status(200).json(newArt)
  }catch(error){
    res.status(500).send('database is sad')
  }
})

// ______________________________________
// upload new image
router.post('/upload', upload.single('file'), async (req,res)=>{
  console.log('server side api')
  const inputObject = {
    name: req.body.name,
    description: req.body.description,
    medium: req.body.medium,
    imageUrl : `/${req.file?.filename}`,
    owner: req.body.owner
  }
  const newArtID = await db.addArt(inputObject)
})


// {
//   fieldname: 'file',
//   originalname: 'sunflowers.jpg',
//   encoding: '7bit',
//   mimetype: 'image/jpeg',
//   destination: 'public/',
//   filename: '1700949040724_sunflowers.jpg',
//   path: 'public/1700949040724_sunflowers.jpg',
//   size: 388210
// }

export default router