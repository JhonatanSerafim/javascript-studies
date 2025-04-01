// função tradicional

// const double = function (number) {
//   return number * 2;
// };

// quando declaramos um arrow function não precisamos da palavra function, os parenteses continuam a receber os parametros, criamos uma seta para direita com igal maior que, e com chaves abrimos e fechamos o bloco da função e dentro atribuimos o corpo da função.

// arrow function

// const double = (number) => {
//   return number * 2;
// };

// Vemos que a função está apresentando mesmo valor.

// porém podemos simplificar mais ainda.

// pois quando escrevemos uma função que recebe um parametro só, podemos remover os parenteses

// const double = number => {
//     return number * 2;
//   };

// O resultado é: 6

// o codigo continua funcionando. E lembrando o `default parameter` não funciona, para funcionar precisamos ter os parenteses

// const double = (number = 0) => {
//   return number * 2;
// };

// O resultado é: 6

// e caso a arrow function nao receba parametros deixamos os parenteses vazios

// const double = () => {
//   return number * 2;
// };

// caso a arrow function esteja retornando apenas um valor podemos remover o return e as chaves deixando todo o código em uma linha só, desejeiro o valor será retornado implicitamente sem a necessidade de especificar um `return`. Esse caso apenas serve para retornar expressões.

const double = () => number * 2;

const result = double(3);
console.log(`O resultado é: ${result}`);

// O resultado é: 6

// Conclusão
// agora se analisarmos essa arrow function com a função tradicional fica perceptivel a redução de código e simplificação.
