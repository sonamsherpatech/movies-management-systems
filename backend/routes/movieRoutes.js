const { fetchMovies, postMovie, updateMovie, deleteMovie, singleFetchMovie } = require("../controllers/movieController")

const router = require("express").Router()

router.route("").get(fetchMovies).post(postMovie)
router.route("/:id").patch(updateMovie).delete(deleteMovie).get(singleFetchMovie)

module.exports = router