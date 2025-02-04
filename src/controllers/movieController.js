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
            if(!title || !directorr || !duration) {
                throw new Error('Preencha todos os campos :/')
            }
            //finalizar a partir daqui
        }
    }
}