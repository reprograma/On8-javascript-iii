// 1. Liste os números de 0 a 10 no console;
    const numeros = [0, 1, 2 ,3, 4, 5, 6,7, 8, 9, 10];
    for (let i= 0; i < numeros.length; i++){
    console.log(numeros[i])
    }
// 2. Some somente os valores ímpares de uma lista de números;

const numeroImpar = [98, 10, 23 ,39, 45, 70, 6, 57, 1, 19, 112];

function soma (valorImpar) {
    return valorImpar % 2 !== 0;
}

const numerosTotal = numeroImpar.filter(soma);

function somarTodos(acumulador,numeroAtual) {
    return acumulador + numeroAtual
}

const resultado = numerosTotal.reduce(somarTodos);

console.log(resultado)

// 3. Liste a tabuada do 6 (do 1 ao 10);

    const numberNatural = [0, 1, 2 ,3, 4, 5, 6, 7, 8, 9, 10];
    for (let i= 1; i < numberNatural.length; i++){
        let result = 0;
        result = numberNatural[i] * 6
        console.log(`6 x ${numberNatural[i]}= ${result}`);
        }

// 4. Crie uma lista de notas de provas;

const testResults = [7.5, 4.6, 9.0, 5.4];

// 5. Some as todas as notas da lista de provas;
function addGrades(accumulator, currentItem) {
    return accumulator + currentItem
}

const resultGrades = testResults.reduce(addGrades);
console.log(resultGrades);

// 6. Crie uma lista de 5 objetos de itens do mercado com as propriedades nome, comprado(true ou false) e valor(com até duas casas decimais);
const supermarket = [
    {
        name: 'spaghetti',
        bougth: true,
        value: 2.00
    },
    {
        name: 'beef',
        bougth: false,
        value: 15.80
    },
    {
        name: 'banana',
        bougth: true,
        value: 1.60
    },
    {
        name: 'chicken',
        bougth: true,
        value: 10.50
    },
    {
        name: 'cheese',
        bougth: false,
        value: 5.20
    }
]

// 7. Filtre os itens já comprados da lista do mercado e retorne essa lista atualizada;
function bougthTrue(item) {
    return item.bougth == true;
}

const bougth = supermarket.filter(bougthTrue);
console.log(bougth);

// 8. Some o total dos valores de itens da lista do mercado.

function addValue (item){
    return item.value; 
}

const total = supermarket.map(addValue);

function addValor(acumulator, itemAtual){
    return acumulator + itemAtual;
}

const resulValue = total.reduce(addValor)
console.log(resulValue)

// 9. Filtre uma lista de nomes e retorne somente os que começam com a letra 'A'
const nomes = ['Anna', 'Andressa', 'Luciana', 'Bruna', 'Amanda']

function inicial(item) {
    return item[0] == 'A';
}

const filter = nomes.filter(inicial);
console.log(filter);

///10. Uma pessoa é representada pelo objeto `pessoa`. Essa pessoa tem a habilidade de comer. A string `>(O)<` representa uma bala. Faça com que essa pessoa consiga comer essa bala, mas pra isso, você vai precisar tirá-la da embalagem. O resultado esperado deve ser: `A NomeDaPessoa comeu a bala: O`;
const confeito = ['>(O)<'];
const balaAberta = (confeito[0].substr(2, 1));

const pessoa = {
    nome: 'Carlos',
    comer(confeito) {
        console.log(`${this.nome} comeu o confeito: ${balaAberta}`);
    }
}
console.log(pessoa.comer(confeito));