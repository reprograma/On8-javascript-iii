// 1. Liste os números de 0 a 10 no console;

for ( i = 0; i <=10; i++){
    console.log(i)
}

// 2. Some somente os valores ímpares de uma lista de números;

const lista = [1,2,3,4,5,6,7,8,9,10];

let soma = 0;

for (i = 0; i <lista.length; i++){
    if (lista[i] %2 > 0){
        soma += lista[i]
    }
}

console.log(soma)


// 3. Liste a tabuada do 6 (do 1 ao 10);

for(i=1; i <= 10; i++){
    console.log(6 * i)
}

// 4. Crie uma lista de notas de provas;

const listaNotas = [6, 7.5, 8, 8.5, 9, 10]

// 5. Some as todas as notas da lista de provas;
let somaNotas = 0

for (i = 0; i < listaNotas.length; i++){
    somaNotas += listaNotas[i]
}

// 6. Crie uma lista de 5 objetos de itens do mercado com as propriedades nome, comprado(true ou false) e valor(com até duas casas decimais);

let listaMercado = [{nome:"cadeira",comprado:true,valor:9.00},{nome:"mesa",comprado:false,valor:50.00},{nome:"lapis",comprado:true,valor:10.00},{nome:"caneta",comprado:false,valor:10.00},{nome:"papel",comprado:true,valor:5.00}]

// 7. Filtre os itens já comprados da lista do mercado e retorne essa lista atualizada;

const listaMercadoFiltrada = listaMercado.filter(item=>item.comprado)
console.log(listaMercadoFiltrada)

// 8. Some o total dos valores de itens da lista do mercado.
const somaMercadoFiltrado = 0

for(i=0; i <listaMercadoFiltrada.length; i++){
    somaMercadoFiltrado += listaMercadoFiltrada[i].valor
}

// 9. Filtre uma lista de nomes e retorne somente os que começam com a letra 'A'
const nomes = ['Anna', 'Andressa', 'Luciana', 'Bruna', 'Amanda']
const nomesFiltrados = nomes.filter(nome=>nome.charAt(0)=='A')

console.log(nomesFiltrados)

///10. Uma pessoa é representada pelo objeto `pessoa`. Essa pessoa tem a habilidade de comer. A string `>(O)<` representa uma bala. Faça com que essa pessoa consiga comer essa bala, mas pra isso, você vai precisar tirá-la da embalagem. O resultado esperado deve ser: `A NomeDaPessoa comeu a bala: O`;

const confeito = ['>(O)<'];
const pessoa = {
    nome: 'Carlos',
    comer(confeito) {
        console.log(`${this.nome} comeu o confeito: ${confeito[0].charAt(2)}`);
    }
}

pessoa.comer(confeito)