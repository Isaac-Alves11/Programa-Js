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

const idadeComprador = 17;
console.log("Destinos possíveis");
console.log(salvador, saoPaulo, rioDeJaneiro, minasGerais);
console.log(listaDeDestinos);

if(idadeComprador>=18){
     console.log("Comprador maior de idade");
    listaDeDestinos.splice(1,1); //removendo um item se a pessao for maior de idade
}else if (estaAcompanhado == true){
("Comprador está acompanhado");
}else {
console.log("comprador não é maior de idade e não posso vender");
}

console.log(listaDeDestinos);

console.log(idadeComprador > 18);
console.log(idadeComprador < 18);
console.log(idadeComprador <= 18);
console.log(idadeComprador >= 18);
console.log(idadeComprador == 18);