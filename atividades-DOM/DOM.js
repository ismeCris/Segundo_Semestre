
//tag
var titulo = document.getElementsByTagName('h1')[0];
console.log(titulo);

var lista = document.getElementsByTagName('li');
console.log(lista);

var lista = document.getElementsByTagName('h1')[0];
console.log(lista);
//id
var p = document.getElementById('principal');
console.log(p);
//classe
var classe = document.getElementsByClassName('item');
console.log(classe);
/*--------------------------------------------- */
var itemclasse = document.querySelector('#lista1 .item'); //queryselector mostra apenas um item o primeiro
console.log(itemclasse);

var itensclasse = document.getElementsByClassName('item');
console.log(itensclasse);

var intensQuery = document.querySelectorAll('#lista2 li');
console.log(intensQuery);

/*exercicio 01 */
function colocarEmNegrito() {
    var nome = document.getElementById('none').value.toLowerCase();
    var lista = document.getElementById('lista');
    var itens = lista.getElementsByTagName('li');

    for (var i = 0; i < itens.length; i++) {
        var item = itens[i];
        if (item.innerText.toLowerCase().includes(nome)) {
            item.style.fontWeight = 'bold';
        } else {
            item.style.fontWeight = 'normal';
        }
    }
}


/*exer 02 */