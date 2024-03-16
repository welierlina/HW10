const router = require('express').Router()
const movieRoute = require('./movie.route')

router.use('/movies', movieRoute)

module.exports = router