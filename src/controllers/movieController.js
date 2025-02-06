const Movie = require("../models/Movie");
const MovieList = require("../models/MovieList");

const lista = new MovieList();

const filme1 = new Movie('A Cinco Passos De Você', 'Justin Baldoni', '1h57', 20);
lista.addMovie(filme1);

lista.addMovie(new Movie('Amor à Primeira Vista', 'Vanessa Caswill', '1h31', 1));

const router = {
    addMovie: (req, res) => {
        try {
            const { title, director, duration, plays } = req.body;
            if(!title || !director || !duration) {
                throw new Error('Preencha todos os campos :/')
            }
            const film = new Movie (title, director, duration, plays)
            lista.addMovie(film);
            res.status(200).json({message: "Criado com sucesso :)"});
        } catch (error) {
            res.status(400).json({message: "Erro ao criar filme :(", error});
        }
    },

    getAllMovies: (req, res) => {
        try {
            const movies = lista.getAllMovies();
            res.status(200).json(movies);
        } catch (error) {
            res.status(404).json({message: "Erro ao buscar filmes :(", error});
        }
    },

    getMovieById: (req, res) => {
        try {
            const id = req.params.id;
            res.status(200).json(lista.getMovieById(id));
        } catch (error) {
            res.status(404).json({message: "Erro ao buscar filme por id :(", error});
        }
    },
    
};