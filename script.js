document.addEventListener('DOMContentLoaded',function(){

    const botaoDeAcessibilidade=document.getElementById('botao-acessibilidade');  
    
    const opcoesDeAcessibilidade=document.getElementById9('opcoes-acessibilidade');

botaoDeAcessibilidade.addEventListener('click',function(){
    
    botaoDeAcessibilidade.classList.toggle('rotacao-botao');
    opcoesDeAcessibilidade.classList.toggle('apresenta-lista');



    const botaoSelecionado=botaoDeAcessibilidade.getAttribute('aria-expanded')=== 'true';    

})


})