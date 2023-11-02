let vitorias = 80;
let derrotas = 4;

let nivel = "";


function calculoRank(){
   return vitorias - derrotas
}

let resultado = calculoRank(vitorias,derrotas)
console.log(resultado)

if (resultado <= 10) {
    nivel = "Ferro"
} else if (resultado >= 11 && resultado <= 20) {
    nivel = "Bronze"
} else if (resultado >= 21 && resultado <= 50) {
    nivel = "Prata"
} else if (resultado >= 51 && resultado <= 80) {
    nivel = "Ouro"
} else if (resultado >= 81 && resultado <= 90) {
   nivel = "Diamante"
}  else if (resultado >= 91 && resultado <= 100) {
    nivel = "Lendario"
} else {
    nivel = "Imortal"
}

let saida = `O Herói tem um saldo de ${resultado} e está no nível de ${nivel}`
console.log(saida)

