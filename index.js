let link = "Link está na ";

let xp = 9000;

let nivel;


if (xp < 1000) {
    nivel = "Liga de Ferro";
} else if (xp >= 1001 && xp <= 2000) {
    nivel = "Liga de Bronze";
} else if (xp >= 2001 && xp <= 5000) {
    nivel = "Liga de Prata";
} else if (xp >= 5001 && xp <= 7000) {
    nivel = "Liga de Ouro";
} else if (xp >= 7001 && xp <= 8000) {
    nivel = "Liga de Platina";
} else if (xp >= 8001 && xp <= 9000) {
    nivel = "Liga Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
    nivel = "Liga Imortal";
} else if (xp >= 10001) {
    nivel = "Liga Radiante";
}
console.log(link + nivel)

//Achei desnecessario colocar a ultima mensagem quando ela ja está definida e corrigida dentro dos algoritmos.
//Fiz alguma coisa errada?


