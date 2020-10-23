// 1. Liste os números de 0 a 10 no console; CONSEGUI 
// for(contador = 0; contador <= 10; contador++){
//     console.log(contador)
// }

// 2. Some somente os valores ímpares de uma lista de números; NÃO CONSEGUI ESSE 
//     const array = [10]
// for(i= 0; i <= array.length; i++){
//         array[i] = i + 1;
//     }
//     soma = 0
//     for (i = 0; i < array.length; i++) {

//         if(i%2 == 1){
//        soma += i +1;
//     }
//     }
// console.log(soma)

// 3. Liste a tabuada do 6 (do 1 ao 10); 
    
    //     for(contador = 0; contador <= 10; contador++){
    //              tabuada = (contador*6)
    //              console.log(tabuada)
    //  }

// 4. Crie uma lista de notas de provas; 
        // array = ['5.0', '7.0', '8.0','10.0', '4.5']
        // console.log(array)


// 5. Some as todas as notas da lista de provas; NÃO CONSEGUI 

// let soma = 0
// for (i = 0; i < array.length; i++){
//     soma +=array[i]
// }
// console.log(soma)

// 6. Crie uma lista de 5 objetos de itens do mercado com as propriedades nome, comprado(true ou false) e valor(com até duas casas decimais);

// const listaDeMercado = [
//     {
//         nome: "banana",
//         comprado: true,
//         valor: 3.50
//     },
//     {
//         nome: "macarrão",
//         comprado: false,
//         valor: 3.00
//     },
//     {
//         nome: "molho de tomate",
//         comprado: true,
//         valor: 2.75
//     },
//     {
//         nome: "queijo",
//         comprado: false,
//         valor: 6.90
//     },
//     {
//         nome: "bolo",
//         comprado: true,
//         valor: 13.50
//     },
// ]
// console.log(listaDeMercado)



// 7. Filtre os itens já comprados da lista do mercado e retorne essa lista atualizada;


// const produtosComprados = listaDeMercado.filter(listaDeMercado =>listaDeMercado.comprado)
// console.log(produtosComprados)


// 8. Some o total dos valores de itens da lista do mercado.


// const valor = listaDeMercado.map(listaDeMercado => listaDeMercado.valor)
// //console.log(valor)

// function somar(listaDeMercado){
//     return listaDeMercado.valor
// }
// const listaDeValor = listaDeMercado.map(somar)
// //console.log(listaDeValor)

// const somaTotal = valor.reduce((acumulador, valor) => acumulador + valor)
//  console.log(somaTotal)



// 9. Filtre uma lista de nomes e retorne somente os que começam com a letra 'A'
const nomes = ['Anna', 'Andressa', 'Luciana', 'Bruna', 'Amanda']

///10. Uma pessoa é representada pelo objeto `pessoa`. Essa pessoa tem a habilidade de comer. A string `>(O)<` representa uma bala. Faça com que essa pessoa consiga comer essa bala, mas pra isso, você vai precisar tirá-la da embalagem. O resultado esperado deve ser: `A NomeDaPessoa comeu a bala: O`;
const confeito = ['>(O)<'];
const pessoa = {
    nome: 'Carlos',
    comer(confeito) {
        console.log(`${this.nome} comeu o confeito: ${praSuavariavel}`);
    }
}
