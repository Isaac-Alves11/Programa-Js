console.log (`Trabalhando com condicionais`);
const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;
const minasGerais = `Minas Gerais`;

const listaDeDestinos = new Array(
    salvador,
    saoPaulo,
    rioDeJaneiro,
    minasGerais,
);

const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos possíveis");
console.log(salvador, saoPaulo, rioDeJaneiro, minasGerais);
console.log(listaDeDestinos);

// if(idadeComprador>= 18) {
//      console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1,1); //removendo um item se a pessao for maior de idade
// } else if (estaAcompanhada == true){
// ("Comprador está acompanhado");
// } else {
// console.log("comprador não é maior de idade e não posso vender");
// }

if (idadeComprador>= 18 || estaAcompanhada == true) {
     console.log("Boa viajem!");
    listaDeDestinos.splice(1,1); //removendo um item se a pessao for maior de idade
} else {
console.log("comprador não é maior de idade e não posso vender");
}

console.log("Embarque: \n\n")
if(idadeComprador >=18 && temPassagemComprada){

    console.log("Boa viagem");
}else{
    console.log("Você não pode embarcar");
}

console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);