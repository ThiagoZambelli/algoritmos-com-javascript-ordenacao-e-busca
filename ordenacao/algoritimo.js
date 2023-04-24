const { edFolha, edGalho } = require('./listasDeLivros.js');

function juntaListas(lista1, lista2) {

    let listaFinal = [];
    let posicaoAtual1 = 0, posicaoAtual2 = 0, atual = 0;

    while (posicaoAtual1 < lista1.length && posicaoAtual2 < lista2.length) {
        let produtoAtualLista1 = lista1[posicaoAtual1];
        let produtoAtualLista2 = lista2[posicaoAtual2];

        if (produtoAtualLista1.preco < produtoAtualLista2.preco) {
            listaFinal[atual] = produtoAtualLista1;            
            posicaoAtual1++
        }else if (produtoAtualLista1.preco > produtoAtualLista2.preco) {
            listaFinal[atual] = produtoAtualLista2;            
            posicaoAtual2++
        }

        atual++
    }
    while (posicaoAtual1 < lista1.length){
        listaFinal[atual] = lista1[posicaoAtual1];
        posicaoAtual1++
        atual++
    }
    while (posicaoAtual2 < lista2.length){
        listaFinal[atual] = lista2[posicaoAtual2];
        posicaoAtual2++
        atual++
    }

    return listaFinal;
}

console.log(juntaListas(edFolha, edGalho));