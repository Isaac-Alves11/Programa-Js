console.log (`Trabalhando com listas`);
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

listaDeDestinos.push(`Curitiba`); //ADD um item na lista
console.log("Destinos possíveis");
console.log(salvador, saoPaulo, rioDeJaneiro, minasGerais);
console.log(listaDeDestinos);

//AS teclas "CTRL + K + C" comenta um campo inteiro" e "CTRL + K + C" tira o comentário
//Array é a maneira como a gente chama itens da lista no JavaScript