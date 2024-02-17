let nomeHeroi = "Spider-Man";
let xpHeroi = 3467;

if (xpHeroi < 1000) {
    console.log("Ferro");
} else if (xpHeroi > 1000 && xpHeroi < 2000) {
    console.log("Bronze");
} else if (xpHeroi > 2000 && xpHeroi < 5000) {
    console.log("Prata");
} else if (xpHeroi > 5000 && xpHeroi < 7000) {
    console.log("Ouro");
} else if (xpHeroi > 7000 && xpHeroi < 8000) {
    console.log("Platina");
} else if (xpHeroi > 8000 && xpHeroi < 9000) {
    console.log("Ascendente");
} else if (xpHeroi > 9000 && xpHeroi < 10000) {
    console.log("Imortal");
} else {
    console.log("Radiante");
}


console.log("O Herói de nome " + nomeHeroi + " está no nível de " + xpHeroi);