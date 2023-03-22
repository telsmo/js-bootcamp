let usuario = {
    nombre:"Juan",
    apellido:"Perez",
    edad:25,
    saludar:function(){
        return `Hola, mi nombre es ${this.nombre}`
    }
}

// Agregar una propiedad
usuario.ciudad = "palermo";

// Quitar una propiedad
delete usuario.edad;

console.log(usuario);

console.log(usuario.saludar());

console.log(Object.keys(usuario));

console.log(Object.values(usuario));

const getIdentidad = (heroe)=>{
    let identidades = {
        "batman":"Bruce Wayne",
        "iron man":"Tony Stark",
        "hulk":"Bruce Banner",
        "Superman":"Clarck Kent"
    }
    return identidades[heroe];
}

console.log(getIdentidad("batman"));