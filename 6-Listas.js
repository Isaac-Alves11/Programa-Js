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
//Array é a maneira como a gente chama itens da lista no JavaScript (O objeto Array do JavaScript é um objeto global usado na construção de 'arrays': objetos de alto nível semelhantes a listas.)

listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);


console.log(listaDeDestinos[1], listaDeDestinos[0]);
//Splice é um comando que eu coloco na minha lista para remover algum item que eu não quero mais nela
//Quando estamos trabalhando com listas, a contagem não começa pelo número 1 e sim pelo número 0

