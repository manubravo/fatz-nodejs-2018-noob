const express = require ('express'); // framework
const color = require('colors');
const servidorExpress = express();

// EXPRESS POR DEFECTO NOS OBLIGA A DEVOLVER ALGO O SINO NOS SALDRÁ ERROR--> CANNOT GET /
servidorExpress.get('/', function (peticionRequest, respuestaResponse){
    respuestaResponse.send('<h1>Hola Mundo de Javascript, ahora estamos usando Express v2.</h1>');
    respuestaResponse.end();
})

// el levantamiento del servidor siempre con ROLLBACK
servidorExpress.listen(3000, function(){
    console.log('Servicios levantados por el puerto 3000 usando EXPRESSJS v2'.green);
});