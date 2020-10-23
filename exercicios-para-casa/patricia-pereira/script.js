// 1. Liste os números de 0 a 10 no console;
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// 2. Some somente os valores ímpares de uma lista de números;
//const impar = numeros.filter(function(numero){
    //return numero % 2 !== 0;  
//})
//console.log (impar)

// numeros.forEach(function impar(item, index, numeros) {
//     let impar;
//     if(numeros[index] % 2 !== 0){
//         console.log(numeros[index]);
//     }
//     console.log(impar);
// })
// console.log(numeros) 

let impar = []
for(let i = 0; i<numeros.length; i++){
    if(numeros[i] % 2 !== 0){
        impar.push(numeros[i]);
    }
}

const numerosImparSoma = impar.reduce((acumulador, itemAtual) => acumulador + itemAtual);

// 3. Liste a tabuada do 6 (do 1 ao 10);
// function tabuadaDoSeis(item, index, numeros) {
//     numeros[index] = item * 6
// }
// numeros.forEach(tabuadaDoSeis)
// console.log(numeros) //
numeros.forEach((item, index, numeros) => numeros[index] = item * 6);

// 4. Crie uma lista de notas de provas;
const notas = [7.8, 10, 8, 9.5]

// 5. Some as todas as notas da lista de provas;
const notasSomadas = notas.reduce((acumulador, itemAtual) => acumulador + itemAtual);

// 6. Crie uma lista de 5 objetos de itens do mercado com as propriedades nome, 
//comprado(true ou false) e valor(com até duas casas decimais);
const chocolates = [
    {
        nome: "Alpino",
        comprado: true,
        valor: 5.99
    },
    {
        nome: "Batom",
        comprado: true,
        valor: 0.99
    },
    {
        nome: "Crunch",
        comprado: false,
        valor: 4.50
    },
    {
        nome: "Galak",
        comprado: false,
        valor: 4.99
    },
    {
        nome: "Kit Kat",
        comprado: true,
        valor: 1.99
    }
]

// 7. Filtre os itens já comprados da lista do mercado e retorne essa lista atualizada;
const chocolatesFiltrados = chocolates.filter(chocolates => chocolates.comprado)


// 8. Some o total dos valores de itens da lista do mercado.
const valores = [5.99, 0.99, 4.50, 4.99, 1.99]
const valoresSomados = valores.reduce((acumulador, itemAtual) => acumulador + itemAtual);
const convertReal = valoresSomados.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'});
console.log(convertReal)
// function funcaoParaConverter(valor, nome){
//     console.log("oi "+ nome + " o valor é"+ valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'}))
// }
// funcaoParaConverter(56.90, "Luiza")

// 9. Filtre uma lista de nomes e retorne somente os que começam com a letra 'A'
const nomes = ['Anna', 'Andressa', 'Luciana', 'Bruna', 'Amanda']

///10. Uma pessoa é representada pelo objeto `pessoa`. Essa pessoa tem a habilidade de comer. A string `>(O)<` representa uma bala. Faça com que essa pessoa consiga comer essa bala, mas pra isso, você vai precisar tirá-la da embalagem. O resultado esperado deve ser: `A NomeDaPessoa comeu a bala: O`;
const confeito = ['>(O)<'];
const pessoa = {
    nome: 'Carlos',
    comer(confeito) {
        //console.log(`${this.nome} comeu o confeito: ${praSuavariavel}`);
    }
}
