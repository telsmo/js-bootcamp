let usuario = {
    nombre:"Juan",
    apellido:"Perez",
    documento:{
        tipoDocumento:"DNI",
        numero:88888888
    },
    edad:25,
    saludar:function(){
        return `Hola, mi nombre es ${this.nombre}`
    }
}
// console.log(usuario.documentos.edad2);
//logear un valor no existente
// console.log(usuario.documentos?.tipoDocumento);

// Agregar una propiedad
usuario.ciudad = "palermo";

// Quitar una propiedad
delete usuario.edad;

// console.log(usuario);
// console.log(usuario.saludar());

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



const mensajesConfirmacion = {
    agregarAlCarrito: "Producto agregado al carrito",
    realizarPago: "Pago realizado con éxito",
    cancelarOrden: "La orden ha sido cancelada"
}
function mostrarMensajeConfirmacion(accion) {
    // const mensaje = mensajesConfirmacion[accion] || "No se encontró la opción";
    const mensaje = (mensajesConfirmacion[accion]!==undefined)?mensajesConfirmacion[accion]:"No se encontró la opción";
    // let mensaje;
    // switch (accion) {
    //     case "agregarAlCarrito":
    //         mensaje="Producto agregado al carrito"
    //         break;

    //     case "realizarPago":
    //         mensaje="Pago realizado con éxito"
    //         break;

    //     case "cancelarOrden":
    //         mensaje="La orden ha sido cancelada"
    //         break;
    
    //     default:
    //         mensaje="No se encontró la opción"
    //         break;
    // }
    console.log(mensaje);
}

mostrarMensajeConfirmacion("inexistente");
// Ejemplos de uso
mostrarMensajeConfirmacion("agregarAlCarrito"); // Imprime "Producto agregado al carrito"
mostrarMensajeConfirmacion("realizarPago"); // Imprime "Pago realizado con éxito"
mostrarMensajeConfirmacion("cancelarOrden"); // Imprime "La orden ha sido cancelada"