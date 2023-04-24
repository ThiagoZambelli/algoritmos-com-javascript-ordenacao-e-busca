const listaLivros = require('../listaDeLivros');

function mergeSorte(array) {
    if (array.length > 1) {
        const meio = Math.floor(array.length / 2);
        // O metodo slice pega uma parte do array, onde o primeiro parametro é o primeiro elemento do novo array e o segundo é onde ele deve cortar.
        const parte1 = mergeSorte(array.slice(0, meio));
        const parte2 = mergeSorte(array.slice(meio, array.length))

        array = ordena(parte1, parte2);
    }

    return array
}

function ordena(parte1, parte2) {
    let posicaoAtual1 = 0, posicaoAtual2 = 0;
    const resultado = [];

    while (posicaoAtual1 < parte1.length && posicaoAtual2 < parte2.length) {
        let itemAtual1 = parte1[posicaoAtual1];
        let itemAtual2 = parte2[posicaoAtual2];

        if (itemAtual1.preco < itemAtual2.preco) {
            resultado.push(itemAtual1);
            posicaoAtual1++
        } else if (itemAtual2.preco < itemAtual1.preco) {
            resultado.push(itemAtual2);
            posicaoAtual2++
        }
    }

    return resultado.concat(posicaoAtual1 < parte1.length
        ? parte1.slice(posicaoAtual1)
        : parte2.slice(posicaoAtual2))
}

console.log(mergeSorte(listaLivros))