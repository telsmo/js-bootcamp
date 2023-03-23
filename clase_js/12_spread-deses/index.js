const persona = {
    nombre: 'Juan',
    edad: 25,
    profesion: 'Ingeniero'
};

// const {nombre, edad, profesion} = persona;

// console.log(nombre); // 'Juan'
// console.log(edad); // 25
// console.log(profesion); // 'Ingeniero'


const presentarPersona = ({nombre, edad, profesion}) => {
    console.log(`Hola, mi nombre es ${nombre}, tengo ${edad} años y soy ${profesion}.`);
}

presentarPersona(persona);



// Arreglos
const numeros = [1, 2, 3];

const [primerNumero, segundoNumero, tercerNumero] = numeros;

console.log(primerNumero); // 1
console.log(segundoNumero); // 2
console.log(tercerNumero); // 3

function sumarNumeros([primerNumero, segundoNumero, tercerNumero]) {
    return primerNumero + segundoNumero + tercerNumero;
}

console.log(sumarNumeros(numeros)); // 6


// spread operator

const masNumeros = [4, 5, 6];

const todosLosNumeros = [...numeros, ...masNumeros];

console.log(todosLosNumeros); // [1, 2, 3, 4, 5, 6]

function sumarNumeros(a, b, c) {
    return a + b + c;
}
console.log(sumarNumeros(...numeros)); // 6


// En objetos

const nuevaPersona = {...persona, ciudad: 'Madrid'};

console.log(nuevaPersona); // {nombre: 'Juan', edad: 25, profesion: 'Ingeniero', ciudad: 'Madrid'}