//desabilita o botão no início
document.getElementById("botao").disabled = true;

//cria um event listener que escuta mudanças no input
document.getElementById("texto").addEventListener("texto", function(event){
    
  //busca conteúdo do input
    var conteudo = document.getElementById("texto").value;
  
    //valida conteudo do input 
    if (conteudo !== null && conteudo !== '') {
      //habilita o botão
      document.getElementById("botao").disabled = false;
    } else {
      //desabilita o botão se o conteúdo do input ficar em branco
      document.getElementById("botao").disabled = true;
      
    }
});