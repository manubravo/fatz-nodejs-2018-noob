const http = require('http');
http.createServer(function(peticionRequest, respuestaResponse){
    /*
    respuestaResponse.writeHead(200, {
        'Context-type':'text/html'
    }); //código de estado.
    respuestaResponse.write('<h1>Hola Mundo desed NodeJS</h1>');
    respuestaResponse.end();
    */

    // CÓDIGO DE ESTADO 200, significa que TODO ha ido correcto.
    /*respuestaResponse.writeHead(200, {
        'Context-type':'text/plain'
    }); //código de estado.
    respuestaResponse.write('soy un texto plano');
    respuestaResponse.end();*/

        // CÓDIGO DE ESTADO 200, significa que TODO ha ido correcto.
        respuestaResponse.writeHead(404, {
            'Context-type':'text/plain'
        }); //código de estado.
        respuestaResponse.write('soy un texto plano que se pone solo cuando hay un 404');
        respuestaResponse.end();

}).listen(3000);