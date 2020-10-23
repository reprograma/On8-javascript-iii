// 1. Liste os números de 0 a 10 no console;

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(numbers);

// 2. Some somente os valores ímpares de uma lista de números;

let soma = 0;
for(let i=0; i < numbers.length; i++){
    if(numbers[i]%2 !=0){
        soma = soma + numbers[i];
    }
}
console.log(soma);

// 3. Liste a tabuada do 6 (do 1 ao 10);

function tabuada6(numbers) {
    console.log(numbers[i]*6);
}
 
let tabuada = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i=1; i <= 10; i++){
    console.log(tabuada = 6 * i)
}

// 4. Crie uma lista de notas de provas;

let notas = [6.5, 8, 7.8, 5, 9];
console.log(notas);

// 5. Some as todas as notas da lista de provas;

let somaNotas = 0;
for(let i=0; i < notas.length; i++){
    somaNotas = somaNotas + notas[i];
}
console.log(somaNotas);

/* let mediaNotas = 0
for(let i=0; i < notas.length; i++){
    mediaNotas = Math.round(mediaNotas + notas[i])/5;
}
console.log(mediaNotas); */

// 6. Crie uma lista de 5 objetos de itens do mercado com as propriedades nome, comprado(true ou false) e valor(com até duas casas decimais);

let shopList = [
    {
        item: "abacate",
        comprado: true,
        valor: 3.45
    },
    {
        item: "cebola roxa",
        comprado: false,
        valor: 1.25
    },
    {
        item: "doritos",
        comprado: true,
        valor: 5.90
    },
    {
        item: "limão",
        comprado: false,
        valor: 1.50
    },
    {
        item: "tomate",
        comprado: false,
        valor: 2.25
    }
]

console.log(shopList);

// 7. Filtre os itens já comprados da lista do mercado e retorne essa lista atualizada;

let filtrarCompras = []
for(let i = 0; i < shopList.length; i++){
    if(!shopList[i].comprado){
        filtrarCompras.push(shopList[i])
    }
}
console.log(filtrarCompras);

// 8. Some o total dos valores de itens da lista do mercado.

let valores = shopList.map(itemValue => itemValue.valor);

let somarValores = valores.reduce((total, item) => Math.round (total + item));
console.log(somarValores);

// 9. Filtre uma lista de nomes e retorne somente os que começam com a letra 'A'

const nomes = ['Anna', 'Andressa', 'Luciana', 'Bruna', 'Amanda']

const nomesA = nomes.filter(function(item){
    return item.charAt(0) == "A"
});

console.log(nomesA)

///10. Uma pessoa é representada pelo objeto `pessoa`. Essa pessoa tem a habilidade de comer. A string `>(O)<` representa uma bala. Faça com que essa pessoa consiga comer essa bala, mas pra isso, você vai precisar tirá-la da embalagem. O resultado esperado deve ser: `A NomeDaPessoa comeu a bala: O`;

const confeito = ['>(O)<'];
const pessoa = {
    nome: 'Carlos',
    comer(confeito) {
        console.log(`${this.nome} comeu o confeito: ${praSuavariavel}`);
    }
}

confeito.splice(0,1,'O')
const nomeDaPessoa = pessoa.nome

console.log(`${nomeDaPessoa} gosta muito de doce e comeu o confeito: ${confeito}`)