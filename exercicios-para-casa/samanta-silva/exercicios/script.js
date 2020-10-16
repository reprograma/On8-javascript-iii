// 1. Liste os números de 0 a 10 no console;

for(let i = 0; i<=10; i++){
console.log(i)

}

// 2. Some somente os valores ímpares de uma lista de números;

const total = 0;
const numeros = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for(let i= 0; i< numeros.length; i++){
    if(numeros[i] % 2 != 0){
        console.log(numeros[i])
        total += numeros[i];
    }
}

console.log(total);


// 3. Liste a tabuada do 6 (do 1 ao 10);

for(let i = 1; i<=10; i++){
const tabuada = 6 * i
console.log(tabuada)

}

// 4. Crie uma lista de notas de provas;

const listaProvas = []

cons nota1 = 10
listaProvas.push(nota1)

cons nota2 = 7
listaProvas.push(nota1)

cons nota3 = 3
listaProvas.push(nota1)

console.log(listaProvas)

// 5. Some todas as notas da lista de provas;

const somaNotas = 0

listaProvas.forEach(notas => {
somaNotas += notas
console.log(somaNotas)

});


// 6. Crie uma lista de 5 objetos de itens do mercado com as propriedades nome, comprado(true ou false) e valor(com até duas casas decimais);

const lista = [
{
nome: "arroz",
comprado: true,
valor: 20
}

{
nome: "feijão",
comprado: false,
valor: 08
}

{
nome: "macarrão",
comprado: true,
valor: 10
}

{
nome: "leite",
comprado: false,
valor: 06
}
        
{
nome: "chocolate",
comprado: true,
valor: 10
}

]



// 7. Filtre os itens já comprados da lista do mercado e retorne essa lista atualizada;

const item = listaMercado.filter(itemComprado)
console.log(item)

// 8. Some o total dos valores de itens da lista do mercado.



// 9. Filtre uma lista de nomes e retorne somente os que começam com a letra 'A'

const nomes = ['Anna', 'Andressa', 'Luciana', 'Bruna', 'Amanda']

function nomesA(item){
return item % L !==B)
}

const nomeA = nomes.filter(nomesA)


///10. Uma pessoa é representada pelo objeto `pessoa`. Essa pessoa tem a habilidade de comer. A string `>(O)<` representa uma bala. Faça com que essa pessoa consiga comer essa bala, mas pra isso, você vai precisar tirá-la da embalagem. O resultado esperado deve ser: `A NomeDaPessoa comeu a bala: O`;
const confeito = ['>(O)<'];
const pessoa = {
    nome: 'Carlos',
    comer(confeito) {
        console.log(`${this.nome} comeu o confeito: ${praSuavariavel}`);
    }
}
