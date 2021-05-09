const http = require('http');

// Manejador del Servidor
const handlerServer = function(peticionRequest, respuestaResponse){
        // CÓDIGO DE ESTADO 200, significa que TODO ha ido correcto.
        respuestaResponse.writeHead(200, {
            'Context-type':'text/html'
        }); //código de estado.
        //respuestaResponse.write('soy un texto plano que se pone solo cuando hay un 404 y he sido llamado desde una constante para modularizar mejor el código.');
        respuestaResponse.write('<h1>Hola mundo de NodeJS, pero sin NPM</h1>')
        respuestaResponse.end();
}
// comentado para ser más modularizado aún
//http.createServer(handlerServer).listen(3000);
// Modularización más compacta para meter ROLLBACKS
const server = http.createServer(handlerServer);
server.listen(3000, function (){
    console.log('Servidor en el puerto 3000')
})