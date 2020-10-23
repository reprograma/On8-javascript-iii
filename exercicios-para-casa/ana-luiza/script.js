// 1. Liste os números de 0 a 10 no console;

for (let i = 0; i <= 10; i++) {
    console.log(i)
}

// 2. Some somente os valores ímpares de uma lista de números;

let somaImpares = 0
const listaNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < listaNumeros.length; i++) {
    if (listaNumeros[i] % 2 != 0) {
        somaImpares += listaNumeros[i]
    } 
}

console.log(somaImpares)

// soma dos valores ímpares com forEach

let somaImpares = 0
const listaNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

listaNumeros.forEach(numeroImpar => {
    if(!(numeroImpar % 2 == 0)) {
        somaImpares += numeroImpar
    }
})

console.log(somaImpares)

// 3. Liste a tabuada do 6 (do 1 ao 10);

for (let i = 1; i <= 10; i++) {
    const tabuada = 6 * i
    console.log(`6 x ${i} = ${tabuada}`) 
}

// 4. Crie uma lista de notas de provas;

let notasProvas = [6.8, 8, 9.5, 10]


// 5. Some todas as notas da lista de provas;

let somaNotas = 0

notasProvas.forEach(nota => {

    somaNotas += nota

})

if (somaNotas / 4 >= 7) {
    console.log(`Notas somadas igual a: ${somaNotas}. Parabéns! Passou de ano!`)
} else {
    console.log(`Notas somadas igual a: ${somaNotas}. Que pena, vai precisar estudar mais.`)
}

// 6. Crie uma lista de 5 objetos de itens do mercado com as propriedades nome, comprado(true ou false) e valor(com até duas casas decimais);



// 7. Filtre os itens já comprados da lista do mercado e retorne essa lista atualizada;



// 8. Some o total dos valores de itens da lista do mercado.



// 9. Filtre uma lista de nomes e retorne somente os que começam com a letra 'A'

const nomes = ['Anna', 'Andressa', 'Luciana', 'Bruna', 'Amanda']

const nomesFiltrados = nomes.filter(nome => {

    if (nome.indexOf('A') == 0) {

        true
        console.log(nome)

    }
})

// 10. Uma pessoa é representada pelo objeto `pessoa`. Essa pessoa tem a habilidade de comer. A string `>(O)<` representa uma bala. Faça com que essa pessoa consiga comer essa bala, mas pra isso, você vai precisar tirá-la da embalagem. O resultado esperado deve ser: `A NomeDaPessoa comeu a bala: O;

const confeito = ['>(O)<'];
const confeitoAberto = confeito.slice(2, 3)

const pessoa = {
    nome: 'Carlos',
    comer(confeito) {
        console.log(`${this.nome} comeu a bala: ${confeitoAberto}`);
    }
}

pessoa.comer(confeitoAberto); 
