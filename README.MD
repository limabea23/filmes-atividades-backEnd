# ATIVIDADE BACK-END SOBRE FILMES 🎬🎥

Neste repositório você irá encontrar a resolução de uma atividade de Back-end, que tem como principal objetivo a criação de um projeto para gerenciar uma lista de filmes.

## Arquitetura MVC

Este projeto segue a arquitetura MVC (Model-View-Controller)

```

├── evidences
├── node_modules
├── src
│   ├── controllers/
        ├── movieController.js
│   ├── models/ 
        ├── Movie.js
        ├── MovieList.js
│   ├── routes/ 
        ├── movieRoutes.js   
│
├── .env
├── .gitignore
├── package-lock.json
├── package.json
├── README.MD
├── server.js
├── XML.xml    

```
## Dependências

```
"dependencies": {
    "cors": "^2.8.5",
    "express": "^4.21.2",
    "nodemon": "^3.1.9",
    "uuid": "^11.0.5"
  }


```

## Routes

`router.get("/movies", movieController.getAllMovies);`: Listar todos os filmes

`router.post("/movies", movieController.addMovie);`: Criar/adicionar um novo filme

`router.get("/movies/:id", movieController.getMovieById);`: Buscar o filme por ID

`router.put("/movies",movieController.updateMovie);`: Atualizar um filme

`router.delete("/movies/:id", movieController.deleteMovie);`: Deletar um filme