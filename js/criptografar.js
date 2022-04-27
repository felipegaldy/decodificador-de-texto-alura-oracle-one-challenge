
var botaoCripto = document.querySelector('#btn1');

botaoCripto.addEventListener('click', function(){
    var mensagem = document.querySelector('#mensagem').value;
    let regex = /[á-ùÁ-ÙA-Z@!#$%^&*?;|§ªº°~´`¬><"'+=()/\\]/g.test(mensagem);
    if(regex){
        var erroMsg = document.querySelector('.regra');
        erroMsg.classList.add('mensagem-invalida')

    }else {
        var erroMsg = document.querySelector('.regra');
        erroMsg.classList.remove('mensagem-invalida')
        var segredo = criptografar(mensagem);
        mostraMensagem(segredo);
    }

    
});


function criptografar(mensagem) {
    var cripto = {
        a: 'ai',
        e: 'enter',
        i: 'imes',
        o: 'ober',
        u: 'ufat'
    };

    var segredo = mensagem.replace(/a|e|i|o|u/gi, function(letra){
        let vogal = cripto[letra];
        let criptoMensagem = vogal.replace(/(?:^|\s)\S/g, function(elemento){ return elemento;});
        return criptoMensagem;
    });
    
    return segredo;
};

function mostraMensagem(segredo) {

    var output = document.querySelector('.output');
    var botaoCopiar = document.createElement('button');
    botaoCopiar.textContent = 'Copiar';
    botaoCopiar.classList.add('botao-copiar');
    var segredoMsg = document.createElement('textarea');
    segredoMsg.classList.add('segredo')
    segredoMsg.value = segredo;
    output.innerHTML = '';
    output.classList.add('output-cripto');
    output.appendChild(segredoMsg);
    output.appendChild(botaoCopiar);
    document.querySelector('#mensagem').value = '';

    botaoCopiar.addEventListener('click', function(){

        var mensagemCopiada = document.querySelector('.segredo')
        mensagemCopiada.select();
        navigator.clipboard.writeText(mensagemCopiada.value);
        console.log("Mensagem copiada:" + mensagemCopiada.value);

        document.querySelector('.segredo').value = 'Mensagem copiada.'

    })

};
