//2) recibe RES y ejecuta promesas segun la ruta

const http = require('http');
const getCharById = require('../controllers/getCharById');
const getCharDetail = require ('../controllers/getCharDetail');

http.createServer((req,res) => { //DEFINO MI RUTA, res y id vienen de PROMESA en getCHat
    res.setHeader('Access-Control-Allow-Origin', '*');
    let id = req.url.split('/').at(-1);
    
    if(req.url.includes('onsearch')){ // si me hacen una peticion, con onsearch :
        getCharById(res, id) //ejecuto promesa getCharByid, pasandole la res y id 
    }

    if(req.url.includes('detail')){   
        getCharDetail(res,id)
    }
                      
}).listen(3001,'localhost')