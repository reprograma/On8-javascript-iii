// 1. Criar uma lista de pokemons com 5 objetos com as propriedades nome, capturado(true ou false) e o ataque(numero de 0 a 100).
const listaPokemons = []

const pokemon01 = new Object()
pokemon01.nome = "Vaporeon"
pokemon01.capturado = true
pokemon01.ataque = 70

// console.log(pokemon01)
listaPokemons.push(pokemon01)

const pokemon02 = {
    nome: "Charmander",
    capturado: false,
    ataque: 90
}
listaPokemons.push(pokemon02)

// console.log(listaPokemons)

const pokemons = [
    {
        nome: "Vaporeon",
        capturado: true,
        ataque: 70
    },
    {
        nome: "Charmander",
        capturado: false,
        ataque: 90
    },
    {
        nome: "Pikachu",
        capturado: true,
        ataque: 100
    },
    {
        nome: "Evee",
        capturado: false,
        ataque: 100
    },
    {
        nome: "Togepi",
        capturado: true,
        ataque: 30
    }
]

// console.log(pokemons)


// 2. Encontrar um pokemon na lista pelo seu nome:

// function capturar(pokemon){
//     // console.log(pokemon)
//     // console.log(pokemon.nome)
//     const nome = pokemon.nome
//     return nome === "Evee"
// }

// const pokemonEncontrado = pokemons.find(capturar)

// if(pokemonEncontrado){
//     console.log(pokemonEncontrado)
// } else {
//     console.log("Pokemon ainda não capturado!")
// }

// Deixando mais conciso 
// const pokemonEncontrado = pokemons.find(function(pokemon){
//     return pokemon.nome === "Evee"
// })

// if(pokemonEncontrado){
//     console.log(pokemonEncontrado)
// } else {
//     console.log("Pokemon ainda não capturado!")
// }

// Usamos JS moderno
const pokemonEncontrado = pokemons.find(pokemon => pokemon.nome === "Evee")
pokemonEncontrado ? console.log(pokemonEncontrado) : console.log("Pokemon ainda não capturado!")

// 3. Filtrar os pokemons não capturados e retornar essa lista atualizada.

// console.log(pokemons)
// console.log(pokemons[0])
// console.log(pokemons[0].capturado)

let filtrados = []
for (let i = 0; i < pokemons.length; i++) {
    if (!pokemons[i].capturado) {
        filtrados.push(pokemons[i])
    }
}
// console.log(filtrados)

// filter
const pokemonsFiltrados = pokemons.filter(pokemon => !pokemon.capturado)
// console.log(pokemonsFiltrados)

// 4. Somar o total de ataque da lista de pokemons.

// console.log(pokemons)
// console.log(pokemons[0].ataque)

// O método map() percorre cada elemento da lista de pokemons e devolve uma nova lista como resultado.
function atacar(pokemon) {
    return pokemon.ataque
}
const listaAtaques = pokemons.map(atacar)
console.log(listaAtaques)

// Refatorando para JS moderno
const ataques = pokemons.map(pokemon => pokemon.ataque)
console.log(ataques)

// O resultado do reduce após percorrer a lista é um valor só(soma)
function somar(acumulador, item){
    return acumulador + item
}
const soma = ataques.reduce(somar)
console.log(soma)

//reduce JS moderno 
const somaAtaques = ataques.reduce((acumulador, item) => acumulador + item)
// console.log(somaAtaques)


// 5. Definir um objeto Javascript que descreva um dos pokemons da Pokedex referência: https://www.pokemon.com/br/pokedex/  

const meuPokemon = {
    id: 498,
    nome: "Tepig",
    descricao: "Ele pode se esquivar habilmente dos ataques de seu inimigo enquanto atira bolas de fogo com seu nariz. Ele torra frutas antes de comê-las.",
    ["altura-metros"]: 0.5,
    categoria: "Porco de fogo",
    ["peso-kg"]: 9.9,
    habilidade: "Chama",
    tipos: ["Fogo", "Água", "Terra", "Rocha"],
    evolucoes: ["Tepig", "Pignite", "Emboar"],
    estatisticas: 200
}
console.log(meuPokemon)
console.log(meuPokemon["altura-metros"])


// 6. Adicionar uma nova propriedade ao pokemon chamada `voar` e definir ela como `true` ou `false`.

meuPokemon.voar = false
console.log(meuPokemon.voar)


// 7. Adicionar um método chamado `acionar` ao pokemon que recebe uma expressão e retorna uma das strings "ESPECIAL", "CORRER", "ATACAR", "DEFENDER".

// Adicionando o novo método declarando uma function
// pokemon.acionar = function(expressao) {
//     switch (expressao) {
//         case 0:
//             console.log("ESPECIAL")
//             break;
//         case 1:
//             console.log("CORRER")
//             break;
//         case 2:
//             console.log("ATACAR")
//             break;
//         case 3:
//             console.log("DEFENDER")
//             break;
//         default:
//             console.log(`Estou exausta, volte depois! Não reconheço esse comando ${expressao}`)
//     }
// }

// Adicionando o novo método declarando uma arraw function
meuPokemon.acionar = (expressao) => {
    switch (expressao) {
        case 0:
            console.log("ESPECIAL")
            break;
        case 1:
            console.log("CORRER")
            break;
        case 2:
            console.log("ATACAR")
            break;
        case 3:
            console.log("DEFENDER")
            break;
        default:
            console.log(`Estou exausto, volte depois! Pois, não reconheço esse comando '${expressao}'`)
    }
}

meuPokemon.acionar(0)
meuPokemon.acionar(1)
meuPokemon.acionar(2)
meuPokemon.acionar(3)
meuPokemon.acionar("vai")


// 8. Printar todas as propriedades(keys) do pokemon no console.

// Cria uma lista de todas as propriedades(keys) do objeto meuPokemon
const keys = Object.keys(meuPokemon)
console.log(keys)

// Exibindo cada uma das propriedades(keys) do objeto meuPokemon com o for()
for(let i = 0; i < keys.length; i++){
    console.log(keys[i])
}

// Exibindo cada propriedade(key) do objeto meuPokemon com forEach()
keys.forEach((key) => console.log(key))

// Exibindo cada propriedade(key) do objeto meuPokemon com o for in
for(const key in meuPokemon) {
    console.log(key)
}

// Exibindo cada propriedade(key) e valor(value) do objeto meuPokemon com o for in
for(const key in meuPokemon) {
    const value = meuPokemon[key]
    console.log(`${key}: ${value}`)
}


// 9. Apresente no console cada valor das propriedades(keys) dos objetos contidos no JSON
const JSON_POKEMONS = [
    {
        "id": 1,
        "name": "Bulbasaur",
        "type": [
            "grass",
            "poison"
        ],
        "stats": 318
    },
    {
        "id": 2,
        "name": "Ivysaur",
        "type": [
            "grass",
            "poison"
        ],
        "stats": 405
    },
    {
        "id": 3,
        "name": "Venusaur",
        "type": [
            "grass",
            "poison"
        ],
        "stats": 525
    },
    {
        "id": 4,
        "name": "Charmander",
        "type": [
            "fire"
        ],
        "stats": 309
    },
    {
        "id": 5,
        "name": "Charmeleon",
        "type": [
            "fire"
        ],
        "stats": 405
    }
]


// Exibe o valor(value) das propriedades(keys) do primeiro objeto da lista JSON_POKEMONS
const primeiroPokemon = JSON_POKEMONS[0]
for(key in primeiroPokemon) {
    const value = primeiroPokemon[key]
    console.log(value)
}

// Com o forEach() exibe os valores das propriedades de todos os objeto da lista JSON_POKEMONS
function exibirValores(pokemon) {
    for(key in pokemon) {
        const value = pokemon[key]
        console.log(value)
    }
    console.log("--------------")
}
JSON_POKEMONS.forEach(exibirValores)


// Deixando mais conciso com JS moderno
JSON_POKEMONS.forEach(pokemon => {
    for(key in pokemon) {
        const value = pokemon[key]
        console.log(value)
    }
    console.log("--------------")
})


// 10. Modifique o JSON traduzindo para português as propriedades(keys) de cada pokemon.

// Acessa o primeiro item da lista JSON_POKEMONS e notamos que esse item é um objeto
console.log(JSON_POKEMONS[0])

// Cria uma variável pokemon e atribuímos a ela o primeiro item da lista JSON_POKEMONS
const pokemon = JSON_POKEMONS[0]

// Acessa essa nova váriavel criada
console.log(pokemon)

// Acessa os valores das propriedades do objeto pokemon, que é o primeiro item da lista JSON_POKEMONS
console.log(pokemon.id)
console.log(pokemon.name)
console.log(pokemon.stats)
console.log(pokemon.type)

// Cria um novo objeto
const novoPokemon = new Object()

// Preenche as propriedades do objeto novoPokemon com os valores das propriedades do objeto pokemon, que é o primeiro item da lista JSON_POKEMONS
novoPokemon.id = pokemon.id
novoPokemon.nome = pokemon.name
novoPokemon.estatisticas = pokemon.stats
novoPokemon.tipo = pokemon.type

// Acessa esse novo objeto criado
console.log(novoPokemon)

// Cria uma nova lista
let lista = []

// Adiciona a nova lista o novo objeto criado
lista.push(novoPokemon)

// Exibe nova lista
console.log(lista)

// Usando o for para traduzir as propriedades do JSON, pois sem ele teriamos que repetir o código a cima várias vezes
let novaLista = []

for(let i = 0; i < JSON_POKEMONS.length; i++){
    const pokemon = JSON_POKEMONS[i]

    const novoPokemon = new Object()

    novoPokemon.id = pokemon.id
    novoPokemon.nome = pokemon.name
    novoPokemon.estatisticas = pokemon.stats
    novoPokemon.tipo = pokemon.type

    novaLista.push(novoPokemon)
}
console.log(novaLista) 

// Usando a função map() que além de percorrer toda lista já retonar uma nova lista
function traduzir(pokemon) {
    // Posso criar um novo objeto da maneira a abaixo também
    const novoPokemon = {
        id: pokemon.id,
        nome: pokemon.name,
        estatisticas: pokemon.stats,
        tipo:pokemon.type
    }

    return novoPokemon
}

const listaTraduzida = JSON_POKEMONS.map(traduzir)
console.log(listaTraduzida)

// Deixando mais conciso
const listaNova = JSON_POKEMONS.map(function(pokemon) {
    const novoPokemon = {
        id: pokemon.id,
        nome: pokemon.name,
        estatisticas: pokemon.stats,
        tipo:pokemon.type
    }
    return novoPokemon
})
console.log(listaNova)

// Refatorando o map() para JS moderno
const listaNovaJSON = JSON_POKEMONS.map(pokemon => {
    const novoPokemon = {
        id: pokemon.id,
        nome: pokemon.name,
        estatisticas: pokemon.stats,
        tipo:pokemon.type
    }
    return novoPokemon
})
console.log(listaNovaJSON)
