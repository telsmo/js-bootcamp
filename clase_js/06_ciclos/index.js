const superHeroes = ["Superman","Iron Man","Batman","Capitan América","Flash"]

let posicion = 0;
while (posicion!==superHeroes.length) {

    console.log(superHeroes[posicion]);
    posicion++;

}

for (let i = 0; i < superHeroes.length; i++) {
    console.log(superHeroes[i]);
    
}

superHeroes.forEach(superHeroe => {
    console.log(superHeroe);
    
});