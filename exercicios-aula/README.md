# Exercícios da aula

1. Criar uma lista de pokemons com 5 objetos com as propriedades nome, capturado(true ou false) e o ataque(numero de 0 a 100).
2. Encontrar um pokemon na lista pelo seu nome
3. Filtrar os pokemons não capturados e retornar essa lista atualizada.
4. Somar o total de ataque da lista de pokemons.
5. Definir um objeto Javascript que descreva um dos pokemons da Pokedex referência: https://www.pokemon.com/br/pokedex/  
6. Adicionar uma nova propriedade ao pokemon chamada `voar` e definir ela como `true` ou `false`.
7. Adicionar um método chamado `acionar` ao pokemon que recebe uma expressão e retorna uma das strings "ESPECIAL", "CORRER", "ATACAR", "DEFENDER".
8. Printar todas as propriedades do pokemon no console.
9. Função e arraw function: Criar uma função que apresente no console cada uma das propriedades do POKEMON_JSON.
```js
const POKEMON_JSON = [
    {
        "id": 1,
        "name": "Bulbasaur",
        "type": [
            "grass",
            "poison"
        ],
        "stats": {
            "total": 318,
            "hp": 45,
            "attack": 49,
            "defense": 49,
            "sp-atk": 65,
            "sp-def": 65,
            "speed": 45
        }
    },
    {
        "id": 2,
        "name": "Ivysaur",
        "type": [
            "grass",
            "poison"
        ],
        "stats": {
            "total": 405,
            "hp": 60,
            "attack": 62,
            "defense": 63,
            "sp-atk": 80,
            "sp-def": 80,
            "speed": 60
        }
    },
    {
        "id": 3,
        "name": "Venusaur",
        "type": [
            "grass",
            "poison"
        ],
        "stats": {
            "total": 525,
            "hp": 80,
            "attack": 82,
            "defense": 83,
            "sp-atk": 100,
            "sp-def": 100,
            "speed": 80
        }
    },
    {
        "id": 4,
        "name": "Charmander",
        "type": [
            "fire"
        ],
        "stats": {
            "total": 309,
            "hp": 39,
            "attack": 52,
            "defense": 43,
            "sp-atk": 60,
            "sp-def": 50,
            "speed": 65
        }
    },
    {
        "id": 5,
        "name": "Charmeleon",
        "price": 2.50,
        "type": [
            "fire"
        ],
        "stats": {
            "total": 405,
            "hp": 58,
            "attack": 64,
            "defense": 58,
            "sp-atk": 80,
            "sp-def": 65,
            "speed": 80
        }
    }
]
```
10. Criar uma função que modifique o POKEMON_JSON que traduza para português as propriedades(keys) de cada pokemons.
