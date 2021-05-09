const fs = require('fs');

fs.writeFile('./texto.txt','informaciÓn de texto', function (err){
    if(err){
        console.log(err);
    }
    console.log('Archivo creado exitosamente');
})

console.log('Soy la última línea de código');
/*
CÓDIGO ASÍNCRONO.
Node está en constante funcionamiento y las tareas externas a él (como consultas a BDD) se ejecutarán después.
*/

fs.readFile('./texto.txt', function (err, datos){
    if(err){
        console.log(err);
    }
    console.log(datos.toString());
})