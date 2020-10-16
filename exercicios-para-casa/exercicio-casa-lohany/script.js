// 1. Liste os números de 0 a 10 no console;

for(let i = 0; i<=10; i++){
    console.log(i)
 }



// 2. Some somente os valores ímpares de uma lista de números;

   //var numeros = [1,2,3,4,5,6,7,8,9,10];
   //var total = 0;

   //for ( var i = 0; i < numeros.length; i++){
    //if(numeros[i] % 2 != 0){
         // total += numeros[i];
     //}
  // } 
   // console.log(total);

// 3. Liste a tabuada do 6 (do 1 ao 10);

 //let int = 2;  // tabuada do 6
 //for(x = 0; x <= 10; x++) {
//    let tabuada = int *x
 // console.log (int + "x" + x + "=" + tabuada);
  
// }
 
//console.log('VOCÊ É NERD')
// 4. Crie uma lista de notas de provas;

// let listaProvas = []

// console.log(listaProvas)

// let nota1 =10
//listaProvas.push(nota1)

// let nota2= 7
// listaProvas.push(nota2)

// let nota3 = 4
// listaProvas.push(nota3)

//console.log(listaProvas)


// 5. Some as todas as notas da lista de provas;

 let somaNota = 0
 var media = 0  
 listaProvas.forEach(nota=> {
      somaNota += nota 
     var media = somaNota / 3
     if(media >6){
         console.log("você passou de ano!!")
     }else{
         console.log("Bora estudar mais um pouco?")
     }
      
     
 });

function CalcularMedia(nota){

}

 console.log('A soma das notas é' +somaNota)
 console.log(media)



// 6. Crie uma lista de 5 objetos de itens do mercado com as propriedades nome, comprado(true ou false) e valor(com até duas casas decimais);

const listaMercado = 

{

    nome:"produto1",
    comprado: true,
    valor: 6,
}

{ 
    nome: "produto2";
    comprado: false;
    valor: 4;

}

{
    nome: "produto3";
    comprado: true;
    valor: 9;
}

{
    nome: "produto4";
    comprado: false;
    valor: 9;
}

// 7. Filtre os itens já comprados da lista do mercado e retorne essa lista atualizada;

let item = listaMercado.filter(intemComprado)
console.log(item)

// 8. Some o total dos valores de itens da lista do mercado.


// 9. Filtre uma lista de nomes e retorne somente os que começam com a letra 'A'
//const nomes = ['Anna', 'Andressa', 'Luciana', 'Bruna', 'Amanda']

///10. Uma pessoa é representada pelo objeto `pessoa`. Essa pessoa tem a habilidade de comer. A string `>(O)<` representa uma bala. Faça com que essa pessoa consiga comer essa bala, mas pra isso, você vai precisar tirá-la da embalagem. O resultado esperado deve ser: `A NomeDaPessoa comeu a bala: O`;
//const confeito = ['>(O)<'];
//const pessoa = {
  //  nome: 'Carlos',
  //  comer(confeito) {
   //     console.log(`${this.nome} comeu o confeito: ${praSuavariavel}`);
  //  }
 //}

//  aula Javascript  => Variaveis 

//  let idade = 12;
//  console.log('idade')
//  let altura = 180
//  console.log(altura)

//  let nome, idade, altura;

//  let nome = 'lohany'
//  console.log('nome')

// var nome = 'Lohany'



// Formato ES6 => especificação da linguagem Script que o JavaScript implementa. 
//                É a descrição e padronização de uma linguagem de script.



//  Aula Constantes => 

let valoringressoAdulto = 45;
valoringressoAdulto = 35;
console.log(valoringressoAdulto);

Tipos Primitivos => 

