//Crear el código que dada una distancia determine el medio de transporte apropiado de acuerdo a las siguientes reglas
// 0 a 1000 metros = pie
// 1000 a 10000 metros = bicicleta
// 10000 a 30000 metros = colectivo
// 30000 a 100000 metros = auto
// +100000 = avion
const getTransport = value => ( value >= 0 && value <= 1000 ) ? 'Pie' 
                        : ( value >= 1000 && value <= 10000 ) ? 'Bicileta ' 
                        : ( value >= 10000 && value <= 30000 ) ? 'Colectivo' 
                        : ( value >= 30000 && value <= 100000 ) ? 'Auto' 
                        : ( value >= 100000 ) ? 'Avion' : 'Valor ingresado incorrecto';

console.log( getTransport( 100 ));