// Dado el siguiente array de alumnos utilizar los métodos de array vistos para generar un array con los alumnos aprobados.Se considera aprobado todo alumno que tenga una nota mayor o igual a 7.
const alumnos = [
    {
        nombre: 'Juan Gomez',
        nota: 7
    }, {
        nombre: 'Pedro Rodriguez',
        nota: 4
    }, {
        nombre: 'Roxana García',
        nota: 8
    }, {
        nombre: 'Luciano Lopez',
        nota: 5
    }, {
        nombre: 'Fernanda Gimenez',
        nota: 6
    }, {
        nombre: 'Florencia Martinez',
        nota: 10
    }, {
        nombre: 'Raul Sanchez',
        nota: 7
    }, {
        nombre: 'Sandra Figueroa',
        nota: 8
    }
];

const getArrayFilter = ( list ) => {
	const newArray = list.filter( x => x.nota >= 7 );
    return newArray;
};

console.log( getArrayFilter( alumnos ));