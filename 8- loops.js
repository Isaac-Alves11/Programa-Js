console.log (`\nTrabalhando com condicionais`);
const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;
const minasGerais = `Minas Gerais`;

const listaDeDestinos = new Array(
    `salvador`,
    `saoPaulo`,
    `rioDeJaneiro`,
    `minasGerais`
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "saoPaulo";

console.log("Destinos possíveis");
console.log(listaDeDestinos);

const podeComprar = idadeComprador>= 18 || estaAcompanhada == true;

let contador = 0;
while(contador <3){
   if (listaDeDestinos[contador] == destino){
       console.log("Destino existe")
   } else{

       console.log("Destino não existe")
   }
    contador += 1;
}
