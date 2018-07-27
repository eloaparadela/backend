const fs = require("fs");

let comando = process.argv[2];
let nome = process.argv[3];
let email = process.argv[4];

//Nomes das peoples

if(comando == "salvar"){
fs.appendFile('pessoas.json', `${nome}: ${email}\r\n`, erro =>{
    if(erro){
        console.log("erro ao escrever o arquivo");
    }
    else{
        console.log("Arquivo escrito com sucesso")
    }
});
}
else{
    console.log("Erro ao escrever o arquivo");
    console.log("Escreva da seguinte maneira:");
    console.log("cadastro.js salvar <nome> <email>");
}

// BUSCAR OS NOMITOS

if(comando == "buscar"){
fs.appendFile('pessoas.json',(erro, sucesso) => {
    if(erro){
     console.log("erro ao fazer a busca");
     console.log(erro);
    }
    else{
      sucesso =sucesso.toString();
      console.log("Busca realizada com sucesso");
      console.log(sucesso);
    }
});
}