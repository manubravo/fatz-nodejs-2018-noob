const http = require('http');

// Manejador del Servidor
const handlerServer = function(peticionRequest, respuestaResponse){
        // CÓDIGO DE ESTADO 200, significa que TODO ha ido correcto.
        respuestaResponse.writeHead(200, {
            'Context-type':'text/html'
        }); //código de estado.
        //respuestaResponse.write('soy un texto plano que se pone solo cuando hay un 404 y he sido llamado desde una constante para modularizar mejor el código.');
        respuestaResponse.write('<h1>Hola mundo de NodeJS, pero con NPM</h1>')
        respuestaResponse.end();
}
// comentado para ser más modularizado aún
//http.createServer(handlerServer).listen(3000);
// Modularización más compacta para meter ROLLBACKS

// USANDO NPM y probando COLORS
const color = require('colors'); // viene del node_modules


const server = http.createServer(handlerServer);
server.listen(3000, function (){
    //console.log('Servidor en el puerto 3000'.green) // debe salir por consola con el color VERDE.
    // Siguiente línea modularizada.
    const mensaje = 'Servidor en el puerto 3000, el main del PACKAGE.JSON es npmTest1.js en vez de index.js.';

    console.log(mensaje.green);
})