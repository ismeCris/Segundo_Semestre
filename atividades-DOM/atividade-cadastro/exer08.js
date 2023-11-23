function cadastrarCliente(){
    //coletar os dados
    var nome = document.getElementById("nome").value;
    var rg = document.getElementById("rg").value;
    var cpf = document.getElementById("cpf").value;
    var rua = document.getElementById("rua").value;
    var  bairro= document.getElementById("bairro" ).value;
    var cep = document.getElementById("cep").value;
    var numero = document.getElementById("numero").value;
    var completo = document.getElementById("complemento").value;
    var profissao = document.getElementById("profissao").value;
    var  estadoCivil = document.getElementById("estadoCivil").value;
    var generoM = document.getElementById("generoM").checked ? "Masculino" : "Feminino";
    var filiacao = document.getElementById("filiacao").value;
    var nacimento = document.getElementById("dataNascimento").value;

    //mensagen de cadastro
    var mensagenCad = "cadastro realizado!\n";

    mensagenCad += "nome:" +nome+"\n";
    mensagenCad += "CPf" +cpf+"\n;"
    mensagenCad += "RG:" +rg+"\n" ;
    mensagenCad += "Endereco:"+"\n";
    mensagenCad += "Rua:"+rua+"\n" ;
    mensagenCad += "Bairo"+bairro+"\n" ;
    mensagenCad += "Cep:"+cep+ "\n" ;
    mensagenCad += "Numero:"+numero+"\n" ;
    mensagenCad += "Completo" +completo+"\n" ;
    mensagenCad += "Proficao:"+profissao+ "\n" ;
    mensagenCad += "Estado Civil:"+estadoCivil+ "\n" ;
    mensagenCad += "Genero:"+generoM+ "\n" ;
    mensagenCad += "Filiacao:"+filiacao+ "\n" ;
    mensagenCad += "Data de Nacimento"+nacimento+ "\n" ;

    //exibir mensagen no console
    console.log(mensagenCad);

    //exibir mensagen no aviso
    alert(mensagenCad);
};