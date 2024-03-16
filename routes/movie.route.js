const router = require('express').Router()

const { getMovies, uploadImage } = require('../controllers/movies.controller')
const multer = require('../middlewares/multer')

router.get('/', getMovies)
router.patch('/upload/:id',multer(),uploadImage)

module.exports = router