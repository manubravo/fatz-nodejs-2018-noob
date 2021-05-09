const Math = {};

function add(x1,x2){
    return x1+x2;
}

function substract(x1,x2){
    return x1-x2;
}

function multiply(x1,x2){
    return x1*x2;
}

function divide(x1,x2){
    if(x2==0){
        console.log('nO SE PUEDE DIVIDIR POR CERO 0');
    } else {
        return x1/x2;
    }
}

Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;

function hola(nombre){
    console.log('Hola ',nombre);
}

module.exports = Math;
/*
Esta sintaxis exporta OBJETOS, DATOS, FUNCIONES, CUALQUIER OBJETO DE JAVASCRIPT (es más potente)
module.exports = hola;*/

/*
Esta sintaxtis exporta UNA PROPIEDAD DE UN OBJETO.
exports.add = add;
exports.substract = substract;
exports.multiply = multiply;
exports.divide = divide;*/
