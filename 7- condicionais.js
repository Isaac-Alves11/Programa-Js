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

console.log("Destinos possíveis");
console.log(salvador, saoPaulo, rioDeJaneiro, minasGerais);
console.log(listaDeDestinos);


listaDeDestinos.splice(1,1); //removenod um item se a pessao for maior de idade


console.log(listaDeDestinos);

