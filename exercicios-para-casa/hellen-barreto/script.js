

// 1. Liste os números de 0 a 10 no console;
    const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    console.log(number)

// 2. Some somente os valores ímpares de uma lista de números;

    let soma = 0
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    for(let i = 0; i , numbers.length; i++){
        if(numbers[i]%2 == 0){
            soma += numbers[i];
        }
    }
        console.log(soma)

// 3. Liste a tabuada do 6 (do 1 ao 10);

    const tabuada = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    for (let i = 0; i <= 10; i++){

        let resultado = (`${i} x ${num} = ${i*nun}`);

        console.log(resultado)
    }

// 4. Crie uma lista de notas de provas;
    
    const listaProva = [
    {
        materia: "português",
        nota: 7 
    },
    {
        materia: "matemática",
        nota: 8
    },
    {
        materia: "inglês",
        nota: 9
    },
    {
        materia: "química",
        nota: 7
    }
]
    console.log(listaProva)

// 5. Some as todas as notas da lista de provas;

    const notas = listaProva.map(listaProva => {
        return notas.soma
    })

// 6. Crie uma lista de 5 objetos de itens do mercado com as propriedades nome, comprado(true ou false) e valor(com até duas casas decimais);

    const mercado = [
    {
        nome: "arroz",
        comprado: true,
        valor: '5.50'
    },
    {
        nome: "feijão",
        comprado: false,
        valor: '8.99'
    },
    {
        nome: "cuscuz",
        comprado: true,
        valor: '2.35'
    },
    {
        nome: "café",
        comprado: true,
        valor: '5'
    },
    {
        nome: "biscoito",
        comprado: false,
        valor: '1.09'
    }
]

// 7. Filtre os itens já comprados da lista do mercado e retorne essa lista atualizada;

    function comprado(mercado) {
        const atualizada = mercado.atualizada
        return atualizada === "arroz", "cuscuz", "café"        
    }

// 8. Some o total dos valores de itens da lista do mercado.
    const valor = mercado.map(mercado => {
        return mercado.valor
    })
    console.log(valor)

// 9. Filtre uma lista de nomes e retorne somente os que começam com a letra 'A'
const nomes = ['Anna', 'Andressa', 'Luciana', 'Bruna', 'Amanda']

const nomesFiltrados = nomes.filter(nome =>{
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