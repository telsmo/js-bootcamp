const adivinarNumero=(num)=> {
    const numeroAleatorio = num
    
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        const numeroAdivinado = Math.floor(Math.random() * 10) + 1; // Generamos un número aleatorio para adivinar de 1 a 10
        
        if (numeroAdivinado === numeroAleatorio) {
        resolve("¡Felicitaciones! Adivinaste el número.");
        } else {
        reject("Lo siento, no adivinaste el número.");
        }
    }, 2000);
    });
}

adivinarNumero(4)
.then((mensaje) => {
    console.log(mensaje);
})
.catch((error) => {
    console.log("catch:",error);
});