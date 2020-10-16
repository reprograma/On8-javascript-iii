// 1. Liste os números de 0 a 10 no console;


para ( deixe  i =  0 ;  i <= 10 ;  i ++ ) {
    console . log ( i )
 }


// 2. Some somente os valores ímpares de uma lista de números;

const  numeros  =  [ 1, 2 , 3, 4 , 5 , 6 , 7 ,  8 , 9 ,  10];

para ( var i =  0 ;  i <  numeros.length ;  i ++ ) {
    if ( numeros [i] % 2! = 0){
        console.log (total);
        total  + =  numeros [ i ] ;
    }
}


// 3. Liste a tabuada do 6 (do 1 ao 10);

valor = parseInt(window.prompt('numero'));
 for(numero=6; numero<=6; numero++){
    document.write(valor + " X " + count + " = " + (count*valor)+"<br>");
 }


// 4. Crie uma lista de notas de provas;

const notasAlunos =  [ 4 ,  5,5 ,  7 ,  8 ,  10 ] ;
console . log ( notasAlunos ) ;


// 5. Some as todas as notas da lista de provas;

// 6. Crie uma lista de 5 objetos de itens do mercado com as propriedades nome, comprado(true ou false) e valor(com até duas casas decimais);
const  mercado  =  [ {

    nome : 'molho tomate' ,
    compradoh : false ,
    preço : 1
} ,
{
    nome : 'chocolate' ,
    bougth : false,
    comprado : 2
} ,
{

    nome : 'salame',
    comprado : true,
    preço : 3
} ,
{

    nome : 'queijo',
    comprado: true,
    preço : 4
{

    nome : 'geléia',
    comprado : false,
    preço : 5
}
]

// 7. Filtre os itens já comprados da lista do mercado e retorne essa lista atualizada;

// 8. Some o total dos valores de itens da lista do mercado.

// 9. Filtre uma lista de nomes e retorne somente os que começam com a letra 'A'

const  nomes  =  [ 'Anna' ,  'Andressa' ,  'Luciana' ,  'Bruna' ,  'Amanda' ]

function  returnName ( nome )  {
    return  nome [ 0 ]  ==  'A' ;
}

console . log ( nomes . filtro ( returnName ) )

///10. Uma pessoa é representada pelo objeto `pessoa`. Essa pessoa tem a habilidade de comer. A string `>(O)<` representa uma bala. Faça com que essa pessoa consiga comer essa bala, mas pra isso, você vai precisar tirá-la da embalagem. O resultado esperado deve ser: `A NomeDaPessoa comeu a bala: O`;
const confeito = ['>(O)<'];
const pessoa = {
    nome: 'Carlos',
    comer(confeito) {
        console.log(`${this.nome} comeu o confeito: ${praSuavariavel}`);
    }
}


