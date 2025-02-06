const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");

router.post("/movies", movieController.addMovie);
router.get("/movies", movieController.getAllMovies);
router.get("/song/:id", movieController.getMovieById);
router.put("/movies",movieController.updateMovie);
router.delete("/movies/:id", movieController.deleteMovie);
router.get("movie/top10", movieController.getTop10Movies);

module.exports = router;