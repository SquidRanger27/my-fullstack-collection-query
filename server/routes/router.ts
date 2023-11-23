import express from 'express'
import * as db from '../db/db'

const router = express.Router()

//_________________________________________
// GET ALL ARTWORKS AND DETAILS FOR DISPLAY
// /api/v1/artworks

router.get('/', async(req,res)=>{
  try{
    const artworks = await db.getArtOverview()
    console.log(artworks)
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
    console.log(req.body)
    const newArt = await db.addArt(req.body)
    res.status(200).json(newArt)
  }catch(error){
    res.status(500).send('database is sad')
  }
})


// const multer = require('multer')
// const upload = multer({ dest: '../../uploads/' })

// // 3
// app.post('/', upload.single('image'), (req, res) => {
//   // 4
//   const imageName = req.file.filename
//   const description = req.body.description

//   // Save this data to a database probably

//   console.log(description, imageName)
//   res.send({description, imageName})

// })


// Multer creates a unique name for the file, so the path will be something like images/d54c8136cd238804b67e4a0c56427f8b

// We probably want to save this data to a database so we can query it back later, but we don't care about that right now. This is just a post about uploading images.



export default router