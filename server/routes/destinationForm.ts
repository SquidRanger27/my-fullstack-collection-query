import express from 'express'
import {
  addDestinationForPlaces,
  deleteDestinationForPlace,
  updateDestination,
} from '../db/db'
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

// DELETE /api/v1/nzplaces/destination/:destinationId
router.delete('/destination/:destinationId', async (req, res) => {
  const destinationId = Number(req.params.destinationId)
  try {
    const response = await deleteDestinationForPlace(destinationId) // Implement this function in your db module
    console.log('Delete Response:', response)
    res.sendStatus(200)
  } catch (error) {
    console.error(error)
    res.status(500).send('Broken')
  }
})

// PUT or PATCH /api/v1/nzplaces/destination/:destinationId
router.patch('/destination/:destinationId', async (req, res) => {
  const destinationId = Number(req.params.destinationId)
  const updateData = req.body // Assuming the request body contains the updated data

  try {
    const updatedDestination = await updateDestination(
      destinationId,
      updateData
    ) // Implement this function in your db module
    console.log('Update Response:', updatedDestination)
    res.status(200).send(updatedDestination)
  } catch (error) {
    console.error(error)
    res.status(500).send('Broken')
  }
})

export default router
