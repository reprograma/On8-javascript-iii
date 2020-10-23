// 1. Liste os números de 0 a 10 no console;

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// 2. Some somente os valores ímpares de uma lista de números;

const numImpar = [0, 5, 10, 16, 28, 55, 63, 70, 89];
function soma(valueImpar) {
    return valueImpar % 2 !== 0;
}
const numerosTotal = numImpar.filter(soma);
function somarTodos(acumulado, numAtual) {
    return acumulado + numAtual
}
const resultado = numerosTotal.reduce(somarTodos);
console.log(resultado);


// 3. Liste a tabuada do 6 (do 1 ao 10);

for (let i = 1; i <= 10; i++) {
    const tabuada = 6 * i
    console.log(tabuada);
}

// 4. Crie uma lista de notas de provas;

const listValue = [3.2, 5.5, 8.9, 9.7];


// 5. Some as todas as notas da lista de provas;

const sumNotas = listValue.reduce((accumulativeNotas, operation) => accumulativeNotas + operation);
console.log(sumNotas);

// 6. Crie uma lista de 5 objetos de itens do mercado com as propriedades nome, comprado(true ou false) e valor(com até duas casas decimais);

const mercadinho = [
    {
        nome: 'cuscuz',
        comprado: true,
        valor: 3.50
    },
    {
        nome: 'carne de sol',
        comprado: true,
        valor: 29.00
    },
    {
        nome: 'chocolate',
        comprado: true,
        valor: 5.00
    },
    {
        nome: 'batata frita',
        comprado: false,
        valor: 8.50
    },
    {
        nome: 'cheese',
        comprado: false,
        valor: 5.20
    }
]
// 7. Filtre os itens já comprados da lista do mercado e retorne essa lista atualizada;

function compradoTrue(item) {
    return item.comprado == true;
}
const comprado = mercadinho.filter(compradoTrue);
console.log(comprado);

// 8. Some o total dos valores de itens da lista do mercado.

// 9. Filtre uma lista de nomes e retorne somente os que começam com a letra 'A'

const nomes = ['Anna', 'Andressa', 'Luciana', 'Bruna', 'Amanda']
let filteredNames = nomes.filter(function (letterA) {
    return letterA[0] === "A";
});
console.log(filteredNames);

///10. Uma pessoa é representada pelo objeto `pessoa`. Essa pessoa tem a habilidade de comer. A string `>(O)<` representa uma bala. Faça com que essa pessoa consiga comer essa bala, mas pra isso, você vai precisar tirá-la da embalagem. O resultado esperado deve ser: `A NomeDaPessoa comeu a bala: O`;
const confeito = ['>(O)<'];
const balaAberta = (confeito[0].substr(2, 1));
const pessoa = {
    nome: 'Carlos',
    comer(confeito) {
        console.log(`${this.nome} comeu todo o confeito: ${balaAberta}`);
    }
}
console.log(pessoa.comer(confeito)); 
