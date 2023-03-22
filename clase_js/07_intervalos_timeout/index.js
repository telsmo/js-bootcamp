
const tiempo = 1000 // 1 sec
const reloj = document.getElementById("reloj");
const intervalo = setInterval(() => {
    //clearInterval(intervalo);
    let fecha = new Date();
    reloj.innerText = ""+fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds();
}, tiempo);

// setTimeout(() => {
//     clearInterval(intervalo); 
//     console.log("Intervalo finalizado");
// }, tiempo*5);