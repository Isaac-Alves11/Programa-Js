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
let destinoExiste= false;
while(contador <3){
   if (listaDeDestinos[contador] == 
    destino){
       destinoExiste = true
       break;
   }
    contador += 1;
}

console.log("destino existe: ", destinoExiste);

if(podeComprar && destinoExiste){
       console.log("Boa viagem");
}else{
    console.log("Desculpe, tivemos um erro!");
}


for(let cont = 0 ;cont < 3 ; cont ++){
    if (listaDeDestinos[contador] == 
     destino){
        destinoExiste = true
        break;
    }

 }