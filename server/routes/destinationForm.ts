import express from 'express'
import { addDestinationForPlaces } from '../db/db'
import multer from 'multer'

const router = express.Router()
router.use(express.urlencoded({ extended: true }))
router.use(express.json())

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  },
})

const upload = multer({ storage: storage })

//POST /api/v1/nzplaces/:id/destination
router.post('/:id/destination', upload.single('image'), async (req, res) => {
  const id = Number(req.params.id)
  try {
    console.log('ID:', id)
    console.log('Request Body:', req.body)
    const input = req.body

    const result = {
      name: input.name,
      description: input.description,
      image: req.file?.filename,
      NZPlaceId: id,
    }

    const response = await addDestinationForPlaces(result)
    console.log('Response:', response)
    res.status(200).send(response)
  } catch (error) {
    console.error(error)
    res.status(500).send('Broken')
  }
})

export default router
