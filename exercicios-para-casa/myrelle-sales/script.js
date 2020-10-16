// 1. Liste os números de 0 a 10 no console;
const numbers = [0,1,2,3,4,5,6,7,8,9,10];
console.log(numbers);

// 2. Some somente os valores ímpares de uma lista de números;
// let addNumbers = [1, 3, 5, 7, 9]
// let total = 0;
// for(let i=0; i < addNumbers.length; i++){
//     total = total + addNumbers[i];
// }


let soma = 0;
const listaNumeros = [0,1,2,3,4,5,6,7,8,9,10]

for(let i =0; i < listaNumeros.length; i ++){
    if(listaNumeros[i]%2 != 0){
        soma += listaNumeros[i];
    }
}
console.log(soma);

// ---> RESOLUÇÃO COM forEach <--- //
// let soma = 0
// const listaNumeros = [0,1,2,3,4,5,6,7,8,9,10]
//
// listaNumeros.forEach(item => {
//     if(!(item%2 == 0)){
//        soma += item
//     }
// })
// console.log(soma)


// 3. Liste a tabuada do 6 (do 1 ao 10);


// 4. Crie uma lista de notas de provas;

const notas = [1,2,3,4,5,6,7,8,9,10];

// 5. Some as todas as notas da lista de provas;

function somarValores(){
       
    nota1 = prompt("Digite a primeira nota:");
    nota2 = prompt("Digite a segunda nota:");
    nota3 = prompt("Digite a terceira nota:");
    total = (nota1 + nota2 + nota3);
    return(total);
}




// 6. Crie uma lista de 5 objetos de itens do mercado com as propriedades nome, comprado(true ou false) e valor(com até duas casas decimais);

itens = [
    {
    nome: 'abacaxi',
    comprado: true,
    valor : 5.00,
},
{
    nome: 'aveia',
    comprado: false,
    valor: 7.80,
},
{
    nome: 'banana',
    comprado: true,
    valor: 6.50,
},
{
    nome: 'açaí',
    comprado: true,
    valor: 30.00,
},
{
    nome: 'ameixa',
    comprado: false,
    valor: 10.00,
}
]

// 7. Filtre os itens já comprados da lista do mercado e retorne essa lista atualizada;

// 8. Some o total dos valores de itens da lista do mercado.

// 9. Filtre uma lista de nomes e retorne somente os que começam com a letra 'A'
const nomes = ['Anna', 'Andressa', 'Luciana', 'Bruna', 'Amanda']


// const nomesFiltrados = nomes.map(nome =>{
//     let nomeA = nome.indexOf('A')==0
//      console.log(nomeA)
//  })
 
///10. Uma pessoa é representada pelo objeto `pessoa`. Essa pessoa tem a habilidade de comer. A string `>(O)<` representa uma bala. Faça com que essa pessoa consiga comer essa bala, mas pra isso, você vai precisar tirá-la da embalagem. O resultado esperado deve ser: `A NomeDaPessoa comeu a bala: O`;
const confeito = ['>(O)<'];
const pessoa = {
    nome: 'Lígia',
    comer(confeito) {
        console.log(`A/O ${nomeDaPessoa} comeu a bala: ${confeito}`)
    
    }
}


const bala = ['O'];
confeito.splice(0,1,'O')
const nomeDaPessoa = pessoa.nome




// const reducer = (accumulator, currentValue) => accumulator + currentValue;

// // 1 + 2 + 3 + 4
// console.log(bala.reduce(reducer));
