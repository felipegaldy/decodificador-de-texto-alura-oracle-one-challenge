var botaoDescriptografar = document.querySelector('#btn2')

botaoDescriptografar.addEventListener('click', function(){
    var msgCripto = document.querySelector('#mensagem').value;
    var msg = descriptografarMsg(msgCripto);
    mostraMensagem(msg);
});


function descriptografarMsg(msgCripto) {
    var descripto =  {
        ai: 'a',
        enter: 'e',
        imes: 'i',
        ober: 'o',
        ufat: 'u'        
    }  
    
    var segredo = msgCripto.replace(/ai|enter|imes|ober|ufat/gi, function(letra){
        let vogal = descripto[letra];
        let criptoMensagem = vogal.replace(/(?:^|\s)\S/g, function(elemento){ return elemento;});
        return criptoMensagem;
    });
    console.log(segredo)
    return segredo;

}