const personas = [
    {
        nombre:"Eric",
        apellido:"Yapura"
    },
    {
        nombre:"Juan",
        apellido:"Romano"
    },
    {
        nombre:"Luis",
        apellido:"Escalona"
    }
];
let empresa = "Adviters";
const empleados = personas.map(empleado=>{
    console.log(empleado.nombre);
    // console.log(empresa, empleado);
    return { empresa , ...empleado }
}
);
console.log(empleados);

const numeros = [4,2,6,7,1,0,9]

const menoresA10 = numeros.filter(num=>{
    return num<5;
});

const menorA10 = numeros.find(num=>{
    return num<5;
});

const menorA10En = numeros.findIndex(num=>{
    return num<5;
});

console.log(menoresA10);
console.log(menorA10);
console.log(menorA10En);