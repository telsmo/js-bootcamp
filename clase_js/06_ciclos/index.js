let resultado=document.getElementById("resultado");
// let res=base;

// let aux=1;
// while (potencia !== aux) {
//     res = res*base;
//     aux++;
// }
// console.log(res);
const calcularPotencia= ()=>{
    let base= document.getElementById("base").value;
    let potencia=document.getElementById("exponente").value;

    let res=base; //3
    for (let i = 1; i < potencia; i++) {
        res = res*base
    }
    // console.log(res);
    resultado.innerText= res;
}