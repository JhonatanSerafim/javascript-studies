// forEach e callbacks

const socialNetworks = ['youtube', 'twitter', 'instagram', 'facebook']

socialNetworks.forEach(()=>{
    console.log('Olá')
})

```txt

Olá
Olá
Olá
Olá

```

```js
const socialNetworks = ['youtube', 'twitter', 'instagram', 'facebook']

socialNetworks.forEach(()=>{
    console.log(socialNetworks)
})

```

```txt

youtube
twitter
instagram
facebook

```

foreach Pode receber 3 parametros, 
primeiro item atual que esta sendo iterado, 
segundo é o index do item atual, o 
terceiro o array que está sendo iterado 


```js
const socialNetworks = ['youtube', 'twitter', 'instagram', 'facebook']

socialNetworks.forEach((socialNetworks, index, array)=>{
    console.log(index, socialNetworks, array)
})

```

podemos ver o no console o index o item e o array 

Image



Outra vantagem do forEach em relação ao for é que a declaração dessa função pode ser desacoplada:

```js
const socialNetworks = ['youtube', 'twitter', 'instagram', 'facebook']


socialNetworks.forEach((socialNetworks, index, array)=>{
    console.log(index, socialNetworks, array)
})

socialNetworks.forEach(logArrayInfo)
```

é a mesma coisa do código anterior porem pode ter casos que se desacoplarmos afunção dessa forma nosso código vai ficar organizado, legivel e podera ser reutilizado em outra parte do código,