// 1. Criar uma lista de pokemons com 5 objetos com as propriedades nome, capturado(true ou false) e o ataque(numero de 0 a 100).

// const listaPokemons = []

// listaPokemons.push(pokemon01)
// const pokemon01 = new Object()
// pokemon01.nome = 'Vaporeon'
// pokemon01.capturado = true
// pokemon01.ataque = 70

// listaPokemons.push(pokemon02)
// const pokemon02 = {
//     nome: 'Charmander',
//     capturado: false,
//     ataque: 90
// }

const pokemons = [
    {
        nome: 'Vaporeon',
        capturado: true,
        ataque: 70
    },
    {
        nome: 'Charmander',
        capturado: false,
        ataque: 90
    },
    {
        nome: 'Pikachu',
        capturado: true,
        ataque: 100
    },
    {
        nome: 'Evee',
        capturado: false,
        ataque: 100
    },
    {
        nome: 'Togepi',
        capturado: true,
        ataque: 30
    }
]

// 2. Encontrar um pokemon na lista pelo seu nome

//console.log(pokemons[0].nome)
// function capturarNome(pokemon){
//     //console.log(pokemon.nome)
//     const nome = pokemon.nome
//     return nome === 'Mew'
// }

// const pokemonEncontrado = pokemons.find(capturarNome)
// //console.log(pokemonEncontrado)

// if (pokemonEncontrado){
//     console.log(pokemonEncontrado)
// } else {
//     console.log('Pokemon ainda não capturado!')
// }

// ---> USANDO JS MODERNO <--- //
const pokemonEncontrado = pokemons.find(pokemon => pokemon.nome === 'Evee')

pokemonEncontrado ? console.log(pokemonEncontrado) : console.log('Pokemon ainda não capturado')


// 3. Filtrar os pokemons não capturados e retornar essa lista atualizada.

// ---> RESOLUÇÃO COM FOR <--- //
// let filtrados = []
// for(let i =0; i < pokemons.length; i++){
//     if(!pokemons[i].capturado){
//         filtrados.push(pokemons[i])
//     }
// }
// console.log(filtrados)

// ---> RESOLUÇÃO COM FILTER <--- //
const pokemonsFiltrados = pokemons.filter(pokemon => !pokemon.capturado)
console.log(pokemonsFiltrados)


// 4. Somar o total de ataque da lista de pokemons.

// ---> USANDO JS MODERNO <--- //
const ataques = pokemons.map(pokemon => {
    //console.log(pokemon.ataque)
    return pokemon.ataque
})
console.log(ataques)

const somaAtaques = ataques.reduce((acumulador, item) => acumulador + item)
console.log(somaAtaques)

// ---> OUTRA RESOLUÇÃO <--- //
// function atacar(pokemon){
//     return pokemon.ataque
// }

// const listaAtaques = pokemons.map(atacar)
// console.log(listaAtaques)


// 5. Definir um objeto Javascript que descreva um dos pokemons da Pokedex referência: https://www.pokemon.com/br/pokedex/  

const meuPokemon = {
    nome: 'Clefairy',
    id: 35,
    tipo: 'fada',
    habilidades: ['guarda mágica', 'charme fofo'],
    fraquezas: ['aço','poção'],
    ['altura-metros']: 0.6,
    ['peso-kg']: 7.5 // se usa entre aspas simples, com o hífem e dentro das chaves quando a propriedade tem mais de um nome.   
}
console.log(meuPokemon)


// 6. Adicionar uma nova propriedade ao pokemon chamada `voar` e definir ela como `true` ou `false`.

meuPokemon.voar = false
console.log(meuPokemon)

// 7. Adicionar um método chamado `acionar` ao pokemon que recebe uma expressão e retorna uma das strings "ESPECIAL", "CORRER", "ATACAR", "DEFENDER".

meuPokemon.acionar = function(expressao){
    switch(expressao){
        case 0:
            console.log('ESPECIAL')
            break;
        case 1:
            console.log('CORRER')
            break;
        case 2:
            console.log('ATACAR')
            break;
        case 3:
            console.log('DEFENDER')
            break;
        default:
            console.log(`Digite um número de 0 a 3! Não reconheço esse comando ${expressao}`)
    }
}
meuPokemon.acionar(0)
meuPokemon.acionar(1)
meuPokemon.acionar(2)
meuPokemon.acionar(3)
meuPokemon.acionar(4)

// ---> COM ARROW FUNCTION <--- //
//  meuPokemon.acionar = (expressao) => {
//     switch(expressao){
//         case 0:
//             console.log('ESPECIAL')
//             break;
//         case 1:
//             console.log('CORRER')
//             break;
//         case 2:
//             console.log('ATACAR')
//             break;
//         case 3:
//             console.log('DEFENDER')
//             break;
//         default:
//             console.log(`Digite um número de 0 a 3! Não reconheço esse comando ${expressao}`)
//     }
// }


// 8. Printar todas as propriedades do pokemon no console.

const propriedades = Object.keys(meuPokemon)
console.log(propriedades)

for (let i=0; i < propriedades.length; i++){
    console.log(propriedades[i])
}

// ---> USANDO FOR IN <--- //
for(const propriedades in meuPokemon){
    console.log(`${propriedades}: ${meuPokemon[propriedades]}`)
}


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

JSON_POKEMONS.forEach(pokemon =>{
    for(propriedade in pokemon){
        console.log(pokemon[propriedade])
    }
    console.log('-----')
})


// 10. Modifique o JSON traduzindo para português as propriedades(keys) de cada pokemon.

function traduzir(item){
    console.log(item.id)

    const pokemon = {
        id: item.id,
        nome: item.name,
        estatisticas: item.stats,
        tipo: item.type
    }
    return pokemon
}

const novaLista = JSON_POKEMONS.map(traduzir)

console.log(novaLista)
