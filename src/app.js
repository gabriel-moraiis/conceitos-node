const express = require("express");
const cors = require("cors");
const { uuid, isUuid } = require('uuidv4');




const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {

  response.json(repositories);

});

app.post("/repositories", (request, response) => {

  const { title, url, techs } = request.body;

  

  const repositorie = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0,
  }

  repositories.push(repositorie);

  return response.json(repositorie);

});

app.put("/repositories/:id", (request, response) => {

  const { title, url, techs } = request.body
  const id = request.params.id
  const index = repositories.findIndex(repo => repo.id === id)

  if(index < 0){
    
    return response.status(400).json({ error: 'Repositório não encontrado'  })
  }

  repositories[index] = Object.assign({}, repositories[index], {title, url, techs})
  

   return response.status(200).json(repositories[index])

});

app.delete("/repositories/:id", (request, response) => {
  // TODO
});

app.post("/repositories/:id/like", (request, response) => {
  // TODO
});

module.exports = app;
