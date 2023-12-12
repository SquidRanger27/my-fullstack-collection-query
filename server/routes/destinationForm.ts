import express from 'express'
import * as Path from 'node:path'
import {
  addDestinationForPlaces,
  deleteDestinationForPlace,
  updateDestination,
} from '../db/db'
import multer from 'multer'

const router = express.Router()
router.use(express.urlencoded({ extended: true }))
router.use(express.json())

const UPLOADS_PATH =
  process.env.NODE_ENV === 'production'
    ? '/app/storage/uploads'
    : Path.resolve('uploads')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, UPLOADS_PATH)
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname)
  },
})

const upload = multer({ storage: storage })

//POST /api/v1/nzplaces/:id/destination
router.post(
  '/:id/destination',
  upload.single('image'),
  async (req, res): Promise<void> => {
    console.log('Request Params:', req.params)
    console.log('Full Request Object:', req.body)
    const id = req.params.id ? Number(req.params.id) : 0

    try {
      console.log('ID:', id)
      console.log('Request Body:', req.body)

      const result = {
        name: req.body.name,
        description: req.body.description,
        image: `/api/v1/uploads/${req.file?.filename}`,
        NZPlaceId: id,
      }

      const response = await addDestinationForPlaces(result)
      console.log('Response:', response)
      res.status(200).send(response)
    } catch (error) {
      console.error(error)
      res.status(500).send('Broken')
    }
  }
)

// PUT or PATCH /api/v1/nzplaces/:id/destination
router.patch(
  '/:id/destination/:destinationId',
  upload.single('image'),
  async (req, res): Promise<void> => {
    console.log('Request Params:', req.params)
    console.log('Full Request Object:', req.body)
    const id = req.params.id ? Number(req.params.id) : 0
    const destinationId = Number(req.params.destinationId)

    try {
      console.log('ID:', id)
      console.log('Request Body:', req.body)

      const result = {
        name: req.body.name,
        description: req.body.description,
        image: `/api/v1/uploads/${req.file?.filename}`,
        NZPlaceId: id,
      }

      const response = await updateDestination(destinationId, result)
      console.log('Response:', response)
      res.status(200).send(response)
    } catch (error) {
      console.error(error)
      res.status(500).send('Broken')
    }
  }
)

// DELETE /api/v1/nzplaces/destination/:destinationId
router.delete(
  '/destination/:destinationId',
  async (req, res): Promise<void> => {
    const id = Number(req.params.destinationId)
    try {
      const response = await deleteDestinationForPlace(id) // Implement this function in your db module
      console.log('Delete Response:', response)
      res.sendStatus(200)
    } catch (error) {
      console.error(error)
      res.status(500).send('Broken')
    }
  }
)

export default router
