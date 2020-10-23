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

console.log(pokemons)

// 2. Encontrar um pokemon na lista pelo seu nome

function capturar(pokemon){
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
/ console.log(pokemons)
// console.log(pokemons[0])
// console.log(pokemons[0].capturado)

let filtrados = []
for(let i = 0; i < pokemons.length; i++){
    if(!pokemons[i].capturado){
        filtrados.push(pokemons[i])
    }
}
console.log(filtrados)

// filter
const pokemonsFiltrados = pokemons.filter(pokemon => !pokemon.capturado)
console.log(pokemonsFiltrados)


// 4. Somar o total de ataque da lista de pokemons.



// 5. Definir um objeto Javascript que descreva um dos pokemons da Pokedex referência: https://www.pokemon.com/br/pokedex/  

// 6. Adicionar uma nova propriedade ao pokemon chamada `voar` e definir ela como `true` ou `false`.

// 7. Adicionar um método chamado `acionar` ao pokemon que recebe uma expressão e retorna uma das strings "ESPECIAL", "CORRER", "ATACAR", "DEFENDER".

// 8. Printar todas as propriedades do pokemon no console.

// 9. Apresente no console cada valor das propriedades dos objetos contidos no JSON
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

// 10. Modifique o JSON traduzindo para português as propriedades(keys) de cada pokemon.
