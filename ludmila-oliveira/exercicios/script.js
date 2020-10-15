// 1. Liste os números de 0 a 10 no console;

const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < number.length; i++) {
    console.log(`o número é: ${number[i]}`);
}
// 2. Some somente os valores ímpares de uma lista de números;

function odd(item) {
    return item % 2 !== 0;
}

const numberOdd = number.filter(odd);
console.log(numberOdd);

function addAll(accumulator, currentItem) {
    return accumulator + currentItem
}

const result = numberOdd.reduce(addAll);
console.log(result);

// 3. Liste a tabuada do 6 (do 1 ao 10);

for (let i = 1; i < number.length; i++) {
    let result = 0;
    result = number[i] * 6;
    console.log(`6 x ${number[i]}= ${result}`);
}

// 4. Crie uma lista de notas de provas;

const gradesValue = [9.5, 5.5, 6.0, 7.3];

// 5. Some as todas as notas da lista de provas;

function addGrades(accumulator, currentItem) {
    return accumulator + currentItem
}

const resultGrades = gradesValue.reduce(addGrades);
console.log(resultGrades);

// 6. Crie uma lista de 5 objetos de itens do mercado com as propriedades nome, comprado(true ou false) e valor(com até duas casas decimais);

const supermarket = [
    {
        name: 'rice',
        bougth: true,
        price: 6.70
    },
    {
        name: 'carrot',
        bougth: false,
        price: 2.10
    },
    {
        name: 'brush',
        bougth: false,
        price: 5.00
    },
    {
        name: 'cookie',
        bougth: true,
        price: 6.50
    },
    {
        name: 'soap',
        bougth: true,
        price: 1.90
    }
]

// 7. Filtre os itens já comprados da lista do mercado e retorne essa lista atualizada;

function bougthTrue(item) {
    return item.bougth == true;
}

const bougth = supermarket.filter(bougthTrue);
console.log(bougth);

// JS MODERNO

const bougth = supermarket.filter(item => item.bougth == true)
console.log(bougth);

// 8. Some o total dos valores de itens da lista do mercado.

function listValue(item){
    return item.price;
}

const arrayValue = supermarket.map(listValue)
console.log(arrayValue);

function addValues(accumulator, currentItem) {
    return accumulator + currentItem
}

const resultValues = arrayValue.reduce(addValues);
console.log(resultValues);

// 9. Filtre uma lista de nomes e retorne somente os que começam com a letra 'A'
const nomes = ['Anna', 'Andressa', 'Luciana', 'Bruna', 'Amanda']

function namesA(item) {
    return item[0] == 'A'; // [0] indica que a letra observada está na primeira posição como se a string fosse um array 
}

const listNameA = nomes.filter(namesA);
console.log(listNameA);

///10. Uma pessoa é representada pelo objeto `pessoa`. Essa pessoa tem a habilidade de comer. A string `>(O)<` representa uma bala. Faça com que essa pessoa consiga comer essa bala, mas pra isso, você vai precisar tirá-la da embalagem. O resultado esperado deve ser: `A NomeDaPessoa comeu a bala: O`;
const confeito = ['>(O)<'];
const confeitoAberto = (confeito[0].substr(2, 1));// o [0] indica que faça essa função no index 0, que nesse caso é o único

const pessoa = {
    nome: 'Carlos',
    comer(confeito) {
        console.log(`${this.nome} comeu o confeito: ${confeitoAberto}`);
    }
}

console.log(pessoa.comer(confeito));