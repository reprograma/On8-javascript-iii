// 1. Liste os números de 0 a 10 no console;

for(let i = 0; i<=10; i++){
    console.log(i)
}

// 2. Some somente os valores ímpares de uma lista de números;

let numero = 0

for(let i = 1; i<=5; i++){
    if(i%2 != 0){
        numero = numero + i
    }
}
console.log(numero)

// 3. Liste a tabuada do 6 (do 1 ao 10);

for (let i = 1; i <= 10; i++){
    console.log( '6 x ' + i + ' = ' + 6*i)
}

// 4. Crie uma lista de notas de provas;

let notas = [7, 8, 5, 6, 9, 7]

// 5. Some todas as notas da lista de provas;

let soma = 0

for (let i = 0; i < notas.length; i++) {
    soma = soma + notas[i]
}
console.log(soma)

// 6. Crie uma lista de 5 objetos de itens do mercado com as propriedades nome, comprado(true ou false) 
// e valor(com até duas casas decimais);



// 7. Filtre os itens já comprados da lista do mercado e retorne essa lista atualizada;

// 8. Some o total dos valores de itens da lista do mercado.

// 9. Filtre uma lista de nomes e retorne somente os que começam com a letra 'A'


const nomes = ['Anna', 'Andressa', 'Luciana', 'Bruna', 'Amanda']

for( let i = 0; i < nomes.length; i++){

    if(nomes[i].substring(0,1)== 'A'){

        console.log(nomes[i])
    }
   
}
///10. Uma pessoa é representada pelo objeto `pessoa`. Essa pessoa tem a habilidade de comer. A string `>(O)<` 
//representa uma bala. Faça com que essa pessoa consiga comer essa bala, mas pra isso, você vai precisar tirá-la da 
//embalagem. O resultado esperado deve ser: `A NomeDaPessoa comeu a bala: O`;


const confeito = ['>(O)<'];
const pessoa = {
    nome: 'Carlos',
    comer(confeito) {
        console.log(`${this.nome} comeu o confeito: ${praSuavariavel}`);
    }
}
