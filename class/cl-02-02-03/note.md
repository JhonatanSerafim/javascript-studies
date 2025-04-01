# Arrow Function

No JavaScript moderno, as _arrow functions_ foram introduzidas para fornecer uma forma mais curta e concisa de declarar funções. Vamos entender como podemos transformar uma função tradicional em uma _arrow function_ e quais as vantagens dessa abordagem.

## Comparação entre Função Tradicional e Arrow Function

### Função Tradicional

```js
const double = function (number) {
  return number * 2;
};

const result = double(3);
console.log(`O resultado é: ${result}`);
```

**Saída no console:**

```txt
O resultado é: 6
```

### Convertendo para Arrow Function

Podemos reescrever essa função utilizando a sintaxe de _arrow function_:

```js
const double = (number) => {
  return number * 2;
};
```

A função continua apresentando o mesmo comportamento e resultado.

### Simplificando ainda mais

Quando uma _arrow function_ recebe apenas um parâmetro, podemos remover os parênteses:

```js
const double = (number) => {
  return number * 2;
};
```

Se a função tiver um retorno simples de uma única expressão, podemos remover as chaves `{}` e a palavra-chave `return`, tornando-a ainda mais concisa:

```js
const double = (number) => number * 2;
```

### Parâmetros Padrão

Diferente das funções tradicionais, se quisermos definir um valor padrão para o parâmetro, precisamos manter os parênteses:

```js
const double = (number = 0) => number * 2;
```

### Função Sem Parâmetros

Se a _arrow function_ não receber parâmetros, os parênteses devem ser mantidos:

```js
const double = () => {
  return number * 2;
};
```

## Conclusão

Comparando a função tradicional com a _arrow function_, percebemos uma grande redução de código e uma simplificação da sintaxe, tornando o código mais limpo e legível. Sempre que possível, use _arrow functions_ para manter o código mais moderno e elegante!
