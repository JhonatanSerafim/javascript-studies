# O método forEach e callback

Até o momento passamanos para nossas funções criadas valores com argumentos como Array, numeros, textos e etc. Só que podemos inserir uma função como argumento quando fazemos isso chamamos de função de callback ou apenas callback.

## Exemplo de função de callback

### Função de Callback

```js
const myFunc = callback  => {
    const value = 77

    callback(value)
}


myFunc(number => {
    console.log(number)
})
};

```

**Saída no console:**

```txt
77
```

🧠 Entendendo o código

Em JavaScript, funções também podem ser usadas como valores. Ou seja, podemos passar uma função como argumento para outra função. Quando fazemos isso, chamamos essa função de callback.

No exemplo acima:

- Criamos uma função chamada myFunc, que espera uma outra função como argumento.

- Dentro de myFunc, definimos o número 77 e chamamos a função que foi passada, entregando esse número para ela.

- Quando usamos myFunc, passamos uma função que recebe um número e mostra no console. Essa é a função de callback.

Então, o JavaScript vai executar essa função que mostramos como argumento somente quando myFunc quiser, e nesse caso, ela manda o número 77.

##✅ Comparando com a vida real

- Pense que:

- myFunc é o chefe.

- O chefe tem uma tarefa (mostrar um número).

- Mas ele quer que alguém execute essa tarefa quando ele mandar.

- Você entrega a tarefa (a função callback).

- O chefe chama você quando ele estiver pronto (chama a callback) e te dá o número.

# 📚 `forEach` em JavaScript

O método `forEach` permite percorrer todos os elementos de um array e executar uma função para cada item. Essa função é chamada de **callback**.

---

## 🔁 Exemplo 1: Mostrar mensagem para cada item

````js
const socialNetworks = ['youtube', 'twitter', 'instagram', 'facebook'];

socialNetworks.forEach(() => {
    console.log('Olá');
});

## 💬 Saída no console:

Olá
Olá
Olá
Olá

## 📋 Exemplo 2: Mostrar o array completo a cada item

const socialNetworks = ['youtube', 'twitter', 'instagram', 'facebook'];

socialNetworks.forEach(() => {
    console.log(socialNetworks);
});

## 💬 Saída no console:

['youtube', 'twitter', 'instagram', 'facebook']
['youtube', 'twitter', 'instagram', 'facebook']
['youtube', 'twitter', 'instagram', 'facebook']
['youtube', 'twitter', 'instagram', 'facebook']


> Aqui, o array completo é impresso 4 vezes — uma para cada item.

## 📍 forEach pode receber 3 parâmetros:

Item atual – o valor do elemento que está sendo percorrido

Index – a posição do item no array

Array completo – o array original que está sendo percorrido

```js
const socialNetworks = ['youtube', 'twitter', 'instagram', 'facebook'];

socialNetworks.forEach((item, index, array) => {
    console.log(index, item, array);
});

````

## 💬 Saída no console:

```txt
0 youtube [ 'youtube', 'twitter', 'instagram', 'facebook' ]
1 twitter [ 'youtube', 'twitter', 'instagram', 'facebook' ]
2 instagram [ 'youtube', 'twitter', 'instagram', 'facebook' ]
3 facebook [ 'youtube', 'twitter', 'instagram', 'facebook' ]
```

> Podemos ver o índice, o item atual e o array completo sendo exibidos em cada iteração.

## 🔄 Desacoplando a função do forEach

Uma vantagem do forEach é que a função callback pode ser escrita separadamente. Isso torna o código mais organizado, reutilizável e legível.

```js
const socialNetworks = ["youtube", "twitter", "instagram", "facebook"];

function logArrayInfo(item, index, array) {
  console.log(index, item, array);
}

socialNetworks.forEach(logArrayInfo);
```

### ✅ Mesma funcionalidade do exemplo anterior, mas com a função logArrayInfo declarada separadamente. Assim, você pode reutilizar essa função em outras partes do código.
