
document.getElementById("botao").disabled = true;

document.getElementById("email").addEventListener("email", function(event){
    
  //busca conteúdo do input
    var conteudo = document.getElementById("email").value;
  
    //valida conteudo do input 
    if (conteudo !== null && conteudo !== '') {
      //habilita o botão
      document.getElementById("botao").disabled = false;
    } else {
      
      document.getElementById("botao").disabled = true;
    }
});