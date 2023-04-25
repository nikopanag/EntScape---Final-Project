const express = require('express');
const { searchMovie, addToMovieCollection, updateMovieStatus, deleteMovieFromCollection, getMovieCollection, searchMovieById, getPopularMovies, recommendMoviesByGenre } = require('../controllers/moviesController');
require('dotenv').config();
const {auth} = require('../middleware/authentication');

const router = express.Router();

// Router to find movies
router.route("/").get(searchMovie);
router.route("/popular").get(getPopularMovies)
router.route("/recommend").get(auth,recommendMoviesByGenre)
router.route("/searchById").get(searchMovieById)
router.route("/:userId").get(getMovieCollection).post(addToMovieCollection).patch(updateMovieStatus).delete(deleteMovieFromCollection);

module.exports = router;