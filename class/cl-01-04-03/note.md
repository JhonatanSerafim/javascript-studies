
# Argumentos, Parâmetros e Default Parameters

Quando queremos passar valores para nossas funções para que elas executem algo com esses valores, utilizamos parâmetros.

```js
const myFunc = function () {
  console.log('Oi, nome!');
};

myFunc();
```

Caso precisemos substituir o texto "nome" por um nome real, podemos adicionar um parâmetro `name`. Esse parâmetro só pode ser usado dentro do escopo da função, sendo uma variável local. No entanto, apenas adicionar o parâmetro ainda não muda o valor exibido.

```js
const myFunc = function (name) {
  console.log(`Oi, ${name}!`);
};

myFunc();
```

Como não atribuímos um valor ao `name`, o resultado será:

```txt
Oi, undefined!
```

Para corrigir isso, passamos o argumento diretamente na chamada da função:

```js
const myFunc = function (name) {
  console.log(`Oi, ${name}!`);
};

myFunc('Nikola');
```

```txt
Oi, Nikola!
```

## Múltiplos Parâmetros e Argumentos

Para passar mais de um parâmetro para a função, adicionamos uma vírgula e incluímos os argumentos na ordem correta.

```js
const myFunc = function (name, lastname) {
  console.log(`Oi, ${name} ${lastname}!`);
};

myFunc('Nikola', 'Serafim');
```

```txt
Oi, Nikola Serafim!
```

A ordem de precedência é da esquerda para a direita. O primeiro parâmetro recebe o primeiro argumento, o segundo parâmetro recebe o segundo argumento, e assim por diante.

## O Que Acontece Sem Argumentos?

Se a função espera parâmetros mas nenhum argumento é fornecido, o resultado será:

```js
const myFunc = function (name, lastname) {
  console.log(`Oi, ${name} ${lastname}!`);
};

myFunc();
```

```txt
Oi, undefined undefined!
```

Por padrão, o valor `undefined` é atribuído aos parâmetros.

## Prevenindo `undefined` com Default Parameters

Para evitar o `undefined`, podemos definir valores padrão para os parâmetros:

```js
const myFunc = function (name = 'Estrôncio', lastname = 'Almeida') {
  console.log(`Oi, ${name} ${lastname}!`);
};

myFunc();
myFunc('Nikola', 'Serafim');
```

```txt
Oi, Estrôncio Almeida!
Oi, Nikola Serafim!
```

Os valores padrão são usados apenas quando nenhum argumento é fornecido ou quando `undefined` é passado explicitamente.

## E Se Apenas Um Argumento For Passado?

```js
myFunc('Nikola');
```

```txt
Oi, Nikola Almeida!
```

O primeiro argumento substitui o valor padrão do primeiro parâmetro (`name`), mas o segundo parâmetro (`lastname`) mantém o valor padrão (`Almeida`).

Definir parâmetros padrão é uma prática recomendada para evitar comportamentos inesperados em funções.
