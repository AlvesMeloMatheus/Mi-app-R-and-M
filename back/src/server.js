const http = require ("http");
const getCharById = require("./controllers/getCharById");
const getCharDetail = require("./controllers/getCharDetail");

const PORT = 3001;

http.createServer((req, res) => {

    //linea 8---- comunica front con back    
    res.setHeader('Access-Control-Allow-Origin', '*');
    const id = req.url.split("/").pop();
    
    if(req.url.includes("onsearch")) {
        getCharById(res, id)
    }

    if(req.url.includes("detail")) {
        getCharDetail(res, id)
    }
    
}).listen(PORT, "localhost");

/*--- webserver

//si hay la url---> rickandmorty/character/id
//.includes---> si hay la ruta que miro
if(req.url.includes("rickandmorty/character")){
    //console.log(req.url.split("/"));

    //.at()---> lee del ultimo hacia arriba
    //const id = req.url.split("/").at(-1);
    
    //acordadr que .filter()--> array con posicion del objeto
    //metodo .find()---> agarra primer elemento con lo que se pide
    // aqui pedi el "id"
    let characterFilter = characters.find(char => char.id === Number(id))

    res.writeHead(200, {"Content-type": "application/json"})
    res.end(JSON.stringify(characterFilter))
}
*/