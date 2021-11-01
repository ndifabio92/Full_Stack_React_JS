//Crear el código que reciba como parámetro un array de números y devuelva el mayor.
const array = [ 1.50, 200, 500, 10 ];
const getMaxValue = arr => Math.max( ...arr );
console.log( getMaxValue( array ));