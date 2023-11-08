var cadastro = document.getElementById('cadastro-form');

cadastro.addEventListener('submit',function(event){
    
    event.preventDefault();

    var nome = document.getElementById('nome').Value;
    var telefone = document.getElementById('telefone').Value;
    var rg = document.getElementById('rg').Value;
    var cpf = document.getElementById('cpf').Value;
    var endereço = document.getElementById('edereço').Value;


    var mensagemSucesso = document.createElement('p');
    mensagemSucesso.textContent = 'O cadastro foi efetuado com sucesso!';
    cadastro.appendChild(mensagemSucesso);
});