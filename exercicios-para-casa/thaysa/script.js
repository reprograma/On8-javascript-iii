// 1. Liste os números de 0 a 10 no console;
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
   console.log(numbers[i]);
}

// 2. Some somente os valores ímpares de uma lista de números;
const numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddFilter = numberList.filter(oddNumber => oddNumber % 2 !== 0)
console.log(oddFilter);

const sum = oddFilter.reduce((accumulative, sumOfOdds) => accumulative + sumOfOdds)
console.log(sum);

// 3. Liste a tabuada do 6 (do 1 ao 10);
const multiple6 = [];
let result = 0;

for(let i = 0; i <= 10; i++) {
    result = i * 6;
    multiple6.push(result);
}

console.log(multiple6)

// 4. Crie uma lista de notas de provas;
const grades = [];

grades.push(7);
grades.push(6.4);
grades.push(10);
grades.push(4.5);

console.log(grades)

// 5. Some as todas as notas da lista de provas;

const sumGrades = grades.reduce((accumulativeGrades, operation) => accumulativeGrades + operation);
console.log(sumGrades)


// 6. Crie uma lista de 5 objetos de itens do mercado com as propriedades nome, comprado(true ou false) e valor(com até duas casas decimais);
const shopList = [];

const item1 = {
    nome: "bolinho ana maria",
    comprado: true,
    valor: 5
}

const item2 = {
    nome: "salgadinho",
    comprado: true,
    valor: 3
}

const item3 = {
    nome: "queijo",
    comprado: false,
    valor: 7
}

const item4 = {
    nome: "vinho",
    comprado: true,
    valor: 30
}

const item5 = {
    nome: "abóbora",
    comprado: false,
    valor: 5
}

shopList.push(item1);
shopList.push(item2);
shopList.push(item3);
shopList.push(item4);
shopList.push(item5);
console.log(shopList);


// 7. Filtre os itens já comprados da lista do mercado e retorne essa lista atualizada;
const itemsFilter = shopList.filter(item => item.comprado) 
console.log(itemsFilter)


// 8. Some o total dos valores de itens da lista do mercado.
const values = shopList.map(item => item.valor)
const shopSum = values.reduce((accumulativeItems, sumOfItems) => accumulativeItems + sumOfItems)
console.log(shopSum)


// 9. Filtre uma lista de nomes e retorne somente os que começam com a letra 'A'
const nomes = ['Anna', 'Andressa', 'Luciana', 'Bruna', 'Amanda']

var filteredNames = nomes.filter(function(letterA) {
    return letterA[0] === "A";
});
console.log(filteredNames)

///10. Uma pessoa é representada pelo objeto `pessoa`. Essa pessoa tem a habilidade de comer. A string `>(O)<` representa uma bala. Faça com que essa pessoa consiga comer essa bala, mas pra isso, você vai precisar tirá-la da embalagem. O resultado esperado deve ser: `A NomeDaPessoa comeu a bala: O`;
const confeito = ['>(O)<'];
const pessoa = {
    nome: 'Carlos',
    comer(confeito) {
        console.log(`${this.nome} comeu o confeito: ${praSuavariavel}`);
    }
}

let praSuavariavel = confeito.split('', 3);

pessoa.comer(confeito)