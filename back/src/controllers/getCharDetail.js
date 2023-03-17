const axios = require("axios");

const getCharDetail = (res, id) => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)

    //axios o fecth me devuelve --> UNA PROMESA
    .then((response) => response.data)
    .then((data) => {
        const character = {
            id: data.id,
            name: data.name,
            image: data.image,
            gender: data.gender,
            species: data.species,
            status: data.status,
            origin: data.origin?.name,
        };
        res.writeHead(200, {"Content-type": "application/json"})
        .end(JSON.stringify(character));
    })
    .catch((error) => res.writeHead(500, {"Content-type": "text/plain"})
    .end(`there is no character with that ${id}`)
    );
}

module.exports = getCharDetail;
