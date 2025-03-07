
# Retornando Valores em Funções

Quando queremos usar o resultado de uma operação para outra utilidade que não seja apenas exibi-lo no `console.log`, precisamos retornar o valor da função.

## Exemplo Inicial

No exemplo abaixo, a função `double` multiplica o número fornecido por 2 e exibe o resultado no console:

```js
const double = function (number) {
    const doubleResult = number * 2;
    console.log(doubleResult);
};

double(3);
```

**Saída:**

```txt
6
```

### Limitação do Escopo

Nesse exemplo, o valor `6` é exibido no console, mas não podemos usá-lo em outro lugar, pois a variável `doubleResult` foi criada dentro do escopo da função. 

Se tentarmos acessar `doubleResult` fora da função, um erro será apresentado, pois a constante não foi definida fora do escopo:

```js
console.log(doubleResult); // ReferenceError: doubleResult is not defined
```

## Como Retornar o Valor da Função

Para obter o valor fora da função, usamos a instrução `return`:

```js
const double = function (number) {
    const doubleResult = number * 2;
    return doubleResult;
};

double(3);
```

**Saída:**

```txt

```

Nada é exibido no console porque o valor foi retornado, mas não o utilizamos.

## Armazenando o Valor Retornado

Para usar o valor retornado, podemos armazená-lo em uma variável e exibi-lo no console:

```js
const double = function (number) {
    const doubleResult = number * 2;
    return doubleResult;
};

const result = double(3);

console.log(result);
```

**Saída:**

```txt
6
```

## Simplificando o Código

Não precisamos necessariamente criar uma variável interna para o cálculo. Podemos retornar o valor diretamente:

```js
const double = function (number) {
    return number * 2;
};

const result = double(3);

console.log(result);
```

**Saída:**

```txt
6
```

## Utilizando o Valor Retornado em Outras Funções

Podemos aproveitar o valor retornado em outra função:

```js
const double = function (number) {
    return number * 2;
};

const showResult = function (value) {
    return `O resultado é: ${value}`;
};

console.log(showResult(double(3)));
```

**Saída:**

```txt
O resultado é: 6
```

Dessa forma, o valor retornado pela função `double` é passado diretamente para a função `showResult`, mostrando uma maior versatilidade no uso do valor.
