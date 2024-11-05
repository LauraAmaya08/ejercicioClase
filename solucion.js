/* Cálculo de PI mediante Simulación de Montecarlo*/


const RADIO = 1;


let dardosDentro = 0;
let total = 0;


for (let index = 0; index < 1000000; index++) {
    let x = Math.random() * 2;
    let y = Math.random() * 2;
    let distancia = Math.sqrt((x - RADIO)**2 + (y - RADIO)**2);
    if (distancia < 1.0){
        dardosDentro ++
        total ++
    } else{
        total ++
    }
}

pi = 4*dardosDentro/(total)

console.log(pi);

