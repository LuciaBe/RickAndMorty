//1)ACA TENGO MIS PROMESAS, controladores, dan RES que luego la recibe la ruta en server segun q ruta sea

const axios = require('axios')

const getCharById = (res, id)=>{ //recibe res y id 
    axios.get(`https://rickandmortyapi.com/api/character/${id}`) //hace peticion a la api de un personaje x id 
    .then(response=> response.data) // response es el rtdo q me trae la api
    .then(data=> { // con data creo un {obj}
        let char= {
            id: data.id,
            name:data.name,
            image: data.image,
            gender: data.gender,
            species: data.species
        }    
    res // devuelvo respuesta 
    .writeHead(200,{'Content-type': 'application/json'}) 
    .end(JSON.stringify(char))
    })
    .catch(err=> 
        res
        .writeHead(500, {'Content-type':'text/plain'})
        .end(`El personaje con id: ${id} no fue encontrado`))
}


module.exports = getCharById