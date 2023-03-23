const arreglo = [1,5,10,3,20,4];

console.log(arreglo[0]);

arreglo[2]=21;

console.log(arreglo);

// agrega un elemento al final
arreglo.push(6);

// agrega un elemento al inicio
arreglo.unshift(8);

// quita el último elemento
let eliminado = arreglo.pop();
console.log(`${eliminado} fue eliminado`);
// quita el primer elemento
arreglo.shift();