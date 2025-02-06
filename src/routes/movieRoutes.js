const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");

router.get("/movies", movieController.getAllMovies);
get.post("/movies", movieController.addMovie);