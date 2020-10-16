// 1. Liste os números de 0 a 10 no console;

for (let i=0; i <= 10; i++){
    console.log(i)
}

// ---> ARRAY <--- //
// const numeros = [0,1,2,3,4,5,6,7,8,9,10]
// console.log(numeros[i])

// 2. Some somente os valores ímpares de uma lista de números;

let soma = 0
const listaNumeros = [0,1,2,3,4,5,6,7,8,9,10]

for(let i =0; i < listaNumeros.length; i++){
    if(listaNumeros[i]%2 != 0){
        soma += listaNumeros[i];
    }
}
console.log(soma)

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

for (let i=1; i <= 10; i++){
    const tabuada = 6 * i
    console.log(`6x${i}=${tabuada}`)
}

// 4. Crie uma lista de notas de provas;

let listaNotas = [2,4,5,7,9]

let nota1 = 10
listaNotas.push(nota1)

console.log(listaNotas)

// 5. Some as todas as notas da lista de provas;

let somaNotas = 0
listaNotas.forEach(nota =>{
    somaNotas += nota
})
console.log(somaNotas)

// 6. Crie uma lista de 5 objetos de itens do mercado com as propriedades nome, comprado(true ou false) e valor(com até duas casas decimais);

const listaObjetos = [
    {
        nome: 'leite',
        comprado: false,
        valor: 4.50,
    },
    {
        nome: 'chocolate',
        comprado: true,
        valor: 5.00,
    },
    {
        nome: 'arroz',
        comprado: true,
        valor: 3.70,
    },
    {
        nome: 'refrigerante',
        comprado: false,
        valor: 6.99,
    },
    {
        nome: 'barra de cereal',
        comprado: true,
        valor: 5.50,
    }
]

// 7. Filtre os itens já comprados da lista do mercado e retorne essa lista atualizada;

const itensFiltrados = listaObjetos.filter(item => item.comprado)
console.log(itensFiltrados)

// ---> RESOLUÇÃO COM FOR <--- //
// let itensComprados = []
// for (let i=0; i < listaObjetos.length; i++){
//     if(listaObjetos[i].comprado){
//         itensComprados.push(listaObjetos[i])
//     }
// }
// console.log(itensComprados)

// 8. Some o total dos valores de itens da lista do mercado.

const valor = listaObjetos.map(item => {
    return item.valor
})

const totalValores = valor.reduce((acumulador, item) => acumulador + item)
console.log(totalValores.toFixed(2))

// 9. Filtre uma lista de nomes e retorne somente os que começam com a letra 'A'
const nomes = ['Anna', 'Andressa', 'Luciana', 'Bruna', 'Amanda']

const nomesFiltrados = nomes.filter(nome => {
   if(nome.indexOf('A')==0){
       true
       console.log(nome)
   }
})


///10. Uma pessoa é representada pelo objeto `pessoa`. Essa pessoa tem a habilidade de comer. A string `>(O)<` representa uma bala. Faça com que essa pessoa consiga comer essa bala, mas pra isso, você vai precisar tirá-la da embalagem. O resultado esperado deve ser: `A NomeDaPessoa comeu a bala: O`;
const confeito = ['>(O)<'];
const pessoa = {
    nome: 'Carlos',
    comer(confeito) {
        console.log(`${this.nome} comeu o confeito: ${praSuavariavel}`);
    }
}

// ---> USANDO SPLICE <--- // 
confeito.splice(0,1,'O')
const nomeDaPessoa = pessoa.nome

console.log(`A/O ${nomeDaPessoa} comeu a bala: ${confeito}`)
