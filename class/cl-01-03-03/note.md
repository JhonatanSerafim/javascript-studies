# Function declaration, function expression e hoisting

## Criando a primeira função:

Para criar uma função em JavaScript, utilizamos a instrução function, seguida pelo nome da função (sayHi, por exemplo). O nome da função segue as mesmas regras de nomenclatura de variáveis e constantes. Após o nome, abrimos e fechamos parênteses ( ) para definir os parâmetros (caso existam) e, em seguida, abrimos e fechamos um bloco de código { }, onde escrevemos as instruções que serão executadas quando a função for chamada.

### Function Declaration

A Function Declaration cria uma função nomeada e a disponibiliza em todo o escopo em que foi declarada:

```js
function sayHi ( ) {
 console.log('oi')
}

```

No exemplo acima, a função sayHi só executa o bloco de código quando é invocada:

```js
sayHi();
```



Porém sem fazer a invocação da função nada acontece:

```js
function sayHi ( ) {
 console.log('oi')
}

sayHi( )

```

```txt
oi
```


### Function expression

Outra forma de criar funções é utilizando a forma __Functio Expression__ que consiste em atribuir a função a uma variável. Observe que não inserimos o nome a função e sim ao nome da varável. Nesse caso fazemos a chamada da função pelo nome da variável.

```js

const showFood = function (){
 console.log('pizza')
}

sayFood()

```

```txt
pizza
```

## Qual a diferença:

Praticamemente nenhum porém temos um detalhe chamado `hoisting` que pode ser traduzido como isamento, isamento significa: puxar para cima elevar ou levatar. Quando você cria função usando *function declaration* se essa função estiver em qualquer lugar do seu código que não seja no topo do arquivo, o javascript puxa a criação para cima do arquivo. Já quando uma *function expression* é criada isso não acontece.

Um exemplo:

```js
sayHi( )
sayHi( )
sayHi( )

function sayHi ( ) {
 console.log('oi')
}

```

```txt
oi
oi
oi
```

Não funciona para function declaration

Causa um erro dizendo que não consegue acessar a showFood antes dela ser iniciada:

```js
showFood(); // ❌ Erro: Cannot access 'showFood' before initialization

const showFood = function () {
  console.log('pizza');
};
```

![Image](https://github.com/user-attachments/assets/ff0a494f-88fd-434b-a016-49c60fda77a4)

## Qual devo usar?

Pode parecer vantajoso usar `Function Declaration` por causa do hoisting, mas confiar nesse comportamento pode tornar o código menos previsível e mais difícil de depurar. Para manter a previsibilidade e um fluxo de código mais claro, prefira sempre declarar suas funções no início do arquivo, independentemente da abordagem escolhida.









