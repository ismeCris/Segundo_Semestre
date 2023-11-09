document.getElementById('cadastroForm').addEventListener('submit', function(event){
    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;
    var rg = document.getElementById('rg').value;
    var cpf = document.getElementById('cpf').value;
    var endereco = document.getElementById('endereco').value;

    if(nome && telefone && rg && cpf && endereco){
        document.getElementById('resultado').innerHTML = "Cadastro realizado com sucesso!";
    }else{
        document.getElementById('resultado').innerHTML = "Por favor, preencha todos os campos";
    }
});
