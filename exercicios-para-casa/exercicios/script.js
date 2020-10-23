// 1. Liste os números de 0 a 10 no console;
const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log("Lista de numeros de 0 a 10")
console.log(numeros)
console.log("---------------")

console.log("Lista os números de 0 a 10")
numeros.forEach(numero => console.log(numero))
console.log("---------------")

// 2. Some somente os valores ímpares de uma lista de números;
const impares = numeros.filter(numero => numero % 2 == 1)
console.log("Numeros impares")
console.log(impares)
console.log("---------------")

const somaImpares = impares.reduce((acumulador, numero) => acumulador + numero)
console.log(`Soma dos numeros impares: ${somaImpares}`) // 25
console.log("---------------")

// 3. Liste a tabuada do 6 (do 1 ao 10);
console.log("Tabuada do numero 6")
for(let i = 0; i < numeros.length; i++) {
    const resultado = 6 * i
    console.log(`6 x ${i} = ${resultado}`)
}
console.log("---------------")

// 4. Crie uma lista de notas de provas;
const notas = [10, 10, 10, 9]
console.log("Notas das provas :D")
console.log(notas)
console.log("---------------")

// 5. Some as todas as notas da lista de provas;
const somaNotas = notas.reduce((acumulador, nota) => acumulador + nota)
console.log("Soma das notas")
console.log(somaNotas) // 39
console.log("---------------")

// 6. Crie uma lista de 5 objetos de itens do mercado com as propriedades nome, comprado(true ou false) e valor(com até duas casas decimais);
const compras = [
    {
        nome: "morango",
        comprado: true,
        valor: 3.50
    },
    {
        nome: "leite",
        comprado: true,
        valor: 5.40
    },
    {
        nome: "pão de leite",
        comprado: false,
        valor: 6.50
    },
    {
        nome: "açucar",
        comprado: true,
        valor: 4.00
    },
    {
        nome: "café",
        comprado: false,
        valor: 6.80
    },
]
console.log("Lista de compras")
console.log(compras)
console.log("---------------")

// 7. Filtre os itens já comprados da lista do mercado e retorne essa lista atualizada;
const itensComprados = compras.filter(item => item.comprado)
console.log("Lista de itens comprados")
console.log(itensComprados)
console.log("---------------")

// 8. Some o total dos valores de itens da lista do mercado.
const valores = compras.map(item => item.valor)
console.log("Lista de valores")
console.log(valores)
console.log("---------------")

const somaValores = valores.reduce((acumulador, valor) => acumulador + valor)
console.log("Soma dos valores")
console.log(somaValores) // 26.2
console.log("---------------")

// 9. Filtre uma lista de nomes e retorne somente os que começam com a letra 'A'
const nomes = ['Anna', 'Andressa', 'Luciana', 'Bruna', 'Amanda']

const nomesA = nomes.filter(nome => {
    const letras = nome.split("")
    const primeiraLetra = letras[0]
    return primeiraLetra == "A"
})

console.log("Lista de nomes que começam com a letra 'A'")
console.log(nomesA)
console.log("---------------")

///10. Uma pessoa é representada pelo objeto `pessoa`. Essa pessoa tem a habilidade de comer. A string `>(O)<` representa uma bala. Faça com que essa pessoa consiga comer essa bala, mas pra isso, você vai precisar tirá-la da embalagem. O resultado esperado deve ser: `A NomeDaPessoa comeu a bala: O`;
const confeito = ['>(O)<'];

const pessoa = {
    nome: 'Carlos',
    comer(confeito) {
        const desembala = confeito[0].split('')
        const bala = desembala[2]
        console.log(`O ${this.nome} comeu o confeito: ${bala}`);
    }
}

pessoa.comer(confeito)