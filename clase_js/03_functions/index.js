let saludar;

saludar = function(nombre){
    console.log("Hola",nombre);
}

console.log(1);
saludar("Juan");

saludar = function(nombre){
    let mensaje = "Hola "+nombre;
    return mensaje;
}

console.log(2);
console.log(saludar("Juan"));


saludar = (nombre = "sin Nombre")=>{
    let mensaje = "Hola "+nombre;
    return mensaje;
}

console.log(3);
console.log(saludar("Juan"));

console.log(4);
console.log(saludar());