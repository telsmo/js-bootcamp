const num = document.getElementById("num");
const res = document.getElementById("respuesta");

const consulta1 = ()=>{
    let val = num.value;
    if (val<5) {
        res.innerText="El número es menor a 5";
    }
};
const consulta2 = ()=>{
    let val = num.value;
    if (( val>5 )&&( val<10 )) {
        res.innerText="El número es mayor a 5 y menor a 10";
    }
    
};
const consulta3 = ()=>{
    let val = num.value;
    if (val<=20) {
        res.innerText="El número es menor o igual a 20";
    }else{
        res.innerText="El número es mayor a 20";
    }
    // res.innerText = (val<=20) ? "El número es menor o igual a 20" : "El número es mayor a 20";
    
};