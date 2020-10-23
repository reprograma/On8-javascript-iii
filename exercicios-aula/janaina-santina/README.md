
# Exercícios da semana

1. Liste os números de 0 a 10 no console;
2. Some somente os valores ímpares de uma lista de números;
3. Liste a tabuada do 6 (do 1 ao 10);
4. Crie uma lista de notas de provas;
5. Some as todas as notas da lista de provas;
6. Crie uma lista de 5 objetos de itens do mercado com as propriedades nome, comprado(true ou false) e valor(com até duas casas decimais);
7. Filtre os itens já comprados da lista do mercado e retorne essa lista atualizada;
8. Some o total dos valores de itens da lista do mercado.
9. Filtre uma lista de nomes e retorne somente os que começam com a letra 'A'
```js
const nomes = ['Anna', 'Andressa', 'Luciana', 'Bruna', 'Amanda'];
```
10. Uma pessoa é representada pelo objeto `pessoa`. Essa pessoa tem a habilidade de comer. A string `>(O)<` representa uma bala. Faça com que essa pessoa consiga comer essa bala, mas pra isso, você vai precisar tirá-la da embalagem. O resultado esperado deve ser: `A NomeDaPessoa comeu a bala: O`;
```js
const confeito = ['>(O)<'];
const pessoa = {
  nome: 'Carlos',
  comer(confeito) {
    console.log(`${this.nome} comeu o confeito: ${praSuavariavel}`);
  }
}
```

# Instruções para fazer e entregar os exercícios 

## Como faço pra baixar e enviar os exercícios ?

1. Entre no repositório da Reprograma e "forke" o [repositorio da aula](https://github.com/reprograma/On8-javascript-iii)

2. Clone o repositório para a sua máquina

   ```
   git clone [link]
   ```

3. Crie uma `branch` com o seu nome

   ```
   git checkout -b "seu-nome"
   ```

   Se já criou sua branch e estiver na master...

   ```
   git checkout "seu-nome"
   ```

4. Dentro da pasta exercícios para casa, faça uma cópia da pasta exercícios e renomeie com seu nome e sejam felizes resolvendo os exercícios :)
   ```
    ├── exercicios-aula
    ├── exercicios-para-casa
    |  ├── exercicios
    |  ├──seu-nome // exemplo como deve ficar
   ```

5. Adicionem as atualizações, "commitem" e deêm `push` no repositório de vocês
   (Verifique que você está na sua branch)

   ```
   git add exercicios-para-casa
   git commit -m "texto do seu commit"
   git push origin SEU-NOME
   ```

6. Entrem no git de vocês e deêm um `pull request` quando terminarem um exercício ou quando terminarem tudo.


## Como resolver os exercícios ?

1. Deve ser entregue no mínino 5 exercícios resolvidos.

2. Você irá executar todos os exercícios usando o console.

2. Mão na massa :)


**Observação:** Se você cansar, aprenda a descansar, não a desistir. 


## E se eu não estiver conseguindo fazer ou com dificuldades ?

- Escreva em português o passo a passo que você pensou para resolver (não se apegue ao JS, mais importante você focar na lógica...vá com calma)
- Está travada em um exercício? Peça ajuda para colegas ou pra Alê (onde se sentir mais confortável, lembre que todas estamos aprendendo...ninguém vai te julgar)
- Tente pesquisar no Google
- Reveja a aula
- Não desista (se você tentou de tudo e não conseguiu resolver, copie na cara dura o código e corra atrás de ir entendendo as coisas no seu tempo. Só não começe por essa opção!)


## Até quando devo entregar ?

Sexta-feira 16/10/2020

## Dúvidas e sugestões ?

Abre uma 'issue' no repositorio da aula no github, é bom que você aprende mais uma coisa,  de quebra você ajuda outra pessoa que pode estar com a mesma dúvida. 

Aproveitem os exercícios
