const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");

router.post("/movies", movieController.addMovie);
router.get("/movies", movieController.getAllMovies);
router.get("/movies/:id", movieController.getMovieById);
router.put("/movies",movieController.updateMovie); 
router.delete("/movies/:id", movieController.deleteMovie);

module.exports = router;