
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

function calcularPesoIdeal(){

    var alturaIput = document.getElementById('altura');
    var sexoSelect = document.getElementById('sexo');
    var resultadoParagraph = document.getElementById('resultado');

    var altura = parseFloat(alturaIput.value);
    var sexo = sexoSelect.value;
    var pesoIdeal;

    if(sexo === 'masculino'){
        pesoIdeal = (72.7 * altura - 58).toFixed(2);
    }else if(sexo ==='feminino'){
        pesoIdeal = (62.1 * altura - 44.7).toFixed(2);
    }else{
        resultadoParagraph.textContent = 'selecione um sexo válido.';
        return;
    }

    resultadoParagraph.textContent = `seu peso ideal é aproximadamente ${pesoIdeal} kg.`
};

/*exer 03*/

function trocaCor(){
    let listaElementos = document.querySelectorAll('li');

    for(let elemento of listaElementos){
        if(elemento.classList == "azul"){
        elemento.classList.remove("azul");
        elemento.classList.add("vermelho");
    }else {
        elemento.classList.remove("vermelho");
        elemento.classList.add("azul");
    }
    };
};