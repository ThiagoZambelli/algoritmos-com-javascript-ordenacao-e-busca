![Alt text](assets/logoLithtleZ.svg)

&nbsp;


<img align="left" width="50%" style="margin-top:-20px" src="assets/eu.png">

</br>
</br>

<div dsplay="inline-block">

<h2 align="justify">Algoritmos com JavaScript</h2>
<h2 align="justify">Feito por : Thiago Zambelli</h2>
<h3 align="justify">Aprofundando em algoritmos de ordenação e busca</h3>
 
  <a href="https://www.linkedin.com/in/thiagozambelli">
    <img width="80px" src="https://i.ibb.co/RyZx12b/linkedin.png" alt="linkedin" style="vertical-align:top;">
  </a>
</div>

- [Projeto](#projeto)
- [Problemas e Soluções](#problemas__solucoes)
- [Aulas](#aulas)

&nbsp;

---

# Problemas e Soluções -> <div id='problemas__solucoe'></div>

## `indexOf()`:
> Metodo do JavaScript com a função de pegar um elemento do array com o index indicado.
~~~JavaScript  
  array.indexOf(indiceDoElementoDesejado)
~~~

&nbsp;

## Numeros arredondados:
> Para a logica do MergeSort é necessario que o array seja dividido pela metade, mas os indeicies ficarim quebrados em caso de numeros impares. Para que isso não ocorra foi usado o metodo `Math.floor` para que os resultados da divisão sejam arredondados para baixo.
~~~JavaScript
  // Neste caso pegamos o tamanho do array dividimos pela metade e aredondamos o resultado.
  const meio = Math.floor(array.length /2);
~~~

&nbsp;

## `console.trace()`:
> De forma bem simples, o `trace()` vai mostrar o caminho percorrido pelo programa até chegar ao ponto em que a função `console.trace()` é chamada.

&nbsp;

## Slice:
> O metodo slice pega uma parte do array, onde o primeiro parametro é o primeiro elemento do novo array e o segundo é onde ele deve cortar.
~~~JavaScript
  const parte1 = array.slice(0, meio);
  const parte2 = array.slice(meio, array.length)
~~~

&nbsp;

## Recursivo:
> Como precisamos que os arrays resultantes da função sejam divididos ate sucessivamente ate restarem arrays de dois itens, usamos o metodo mergeSorte chamando ele mesmo para cada uma das listas. Isso chama-se recursividade.
~~~JavaScript
  function mergeSorte(array) {
      if (array.length > 1) {
          const meio = Math.floor(array.length / 2);
          // O metodo slice pega uma parte do array, onde o primeiro parametro é o primeiro elemento do novo array e o segundo é onde ele deve cortar.
          const parte1 = mergeSorte(array.slice(0, meio));
          const parte2 = mergeSorte(array.slice(meio, array.length))
      }
  }
~~~

&nbsp;

---

# Projeto -> <div id='projeto'></div>

## MergeSort->
> A ideia por tras do Merge Sort se baseia no conceito "Dividir pra conquistar", onde separamos partes menores e isoladas do codigo pra ir atacando aos poucos.

&nbsp;

## QuickSort->
> Consiste em utilizar um Pivo para execução da logica (neste caso a organização do Array)!

&nbsp;

---

# Aulas -> <div id='aulas'></div>

## Aula 1 -

- Podemos pensar em novas formas de “atacar” um problema de ordenação, começando a partir de partes menores já ordenadas e unindo estas partes em uma única lista ordenada;
- Evoluímos o conceito e testamos o funcionamento do algoritmo com uma simulação sem código, similar ao “teste de mesa”, para entendermos quais operações deverão ser feitas pelo código durante o fluxo de execução do programa;
- Após utilizarmos a simulação para entendermos o fluxo do algoritmo e o que ele deve fazer, desenvolvemos um código em JavaScript para implementá-lo através da função juntaListas(), que percorre cada uma das duas listas informadas por parâmetro, compara os valores de cada uma, posiciona estes valores em uma lista única de acordo com o resultado da comparação e, por fim, retorna a lista unida.

## Aula 2 -

- Expandimos o conceito de “dividir para conquistar”, reutilizando a lógica de ordenar duas listas, e desenvolvemos um algoritmo para ordenar uma única lista;
- Utilizando o recurso das simulações e testes, entendemos o funcionamento de um algoritmo de ordenação muito utilizado no dia-a-dia, o Merge Sort;
- Após entendermos o fluxo do algoritmo, fizemos a implementação do algoritmo Merge Sort com JavaScript, através da função mergeSort() que recebe um array e retorna este array ordenado;
- Estudamos a ferramenta de recursão, como ela pode ser utilizada no algoritmo Merge Sort e as diferenças dessa ferramenta com relação aos laços de repetição.