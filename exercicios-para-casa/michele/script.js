// 1. Liste os números de 0 a 10 no console;
console.log('----------------------Exercício 1 ------------------------')
for(let i=0;i<=10;i++){
    console.log(`Os números são: ${i}`)
}
// 2. Some somente os valores ímpares de uma lista de números;
console.log('--------------------Exercício 2 ------------------------')
let lista=[0,1,2,3,4,5,6,7,8,9,10]

let impar=lista.filter((itens)=>itens%2!==0)
    
console.log('Números ímpares',impar)

let somar=impar.reduce((acumulador,itens)=>acumulador+itens)

console.log('soma dos numeros',somar)

// 3. Liste a tabuada do 6 (do 1 ao 10);
console.log('------------------------Exercício 3 ------------------------')
for(let i=1;i<=10;i++){
    console.log(`${i} X 6 = ${i*6}`)
}

// 4. Crie uma lista de notas de provas;
console.log('--------------------Exercício 4 ------------------------')
let notas=[{
    nota:10
},
{
    nota:7
},
{ 
    nota:5
},
{
    nota:8
}
]
console.log('As notas ',notas)

// 5. Some todas as notas da lista de provas;

console.log('--------------------Exercício 5------------------------')

let listasNota=notas.map((item)=>item.nota)
console.log('Lista das notas: ',listasNota)
let total=listasNota.reduce((acomulador,itens)=>acomulador+itens)
console.log('Soma da notas: ',total)

// 6. Crie uma lista de 5 objetos de itens do mercado com as propriedades nome, comprado(true ou false) e valor(com até duas casas decimais);
console.log('---------------------Exercício 6 ------------------------')

let objetos=[
    {
    nome:'arroz',
    comprado:false,
    valor:7.50,
    },
    {
    nome:'batata',
    comprado:true,
    valor:5.50,
    },
    {
    nome:'tomate',
    comprado:true,
    valor:10.00,
    },

    {
    nome:'bolo',
    comprado:true,
    valor:15.00,
},
    {
    nome:'evilha',   
    comprado:false,
    valor:4.50
    }
]
console.log('Os 5 objetos',objetos)

// 7. Filtre os itens já comprados da lista do mercado e retorne essa lista atualizada;
console.log('--------------------Exercício 7 ------------------------')

let itens=(itens)=> itens.comprado===true
let filtro=objetos.filter(itens)
console.log('Itens filtrados: ',filtro)

// 8. Some o total dos valores de itens da lista do mercado.
console.log('---------------------Exercício 8 ------------------------')

let num=objetos.map((item)=>item.valor)
console.log('Lista dos valores a serem somados: ',num)
let valores=(acomulador,itens)=>acomulador+itens
let soma=num.reduce(valores)
console.log('Soma total: ',soma)


// 9. Filtre uma lista de nomes e retorne somente os que começam com a letra 'A'
console.log('----------------------Exercício 9 ------------------------')

const nomes = ['Anna', 'Andressa', 'Luciana', 'Bruna', 'Amanda']
let nome=nomes.filter(itens=>itens[0]=='A')
console.log('Nomes ',nome)



//10. Uma pessoa é representada pelo objeto `pessoa`. Essa pessoa tem a habilidade de comer. A string `>(O)<` representa uma bala. Faça com que essa pessoa consiga comer essa bala, mas pra isso, você vai precisar tirá-la da embalagem. O resultado esperado deve ser: `A NomeDaPessoa comeu a bala: O`;
console.log('---------------------Exercício 10 ------------------------')
const confeito = ['>(O)<'];
console.log('Confeito',confeito)
const pessoa = {
    nome: 'Carlos',
    comer(confeito) {
        console.log(`${this.nome} comeu o confeito: ${praSuavariavel}`);
    }
}
