let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let = numeroAleatorio = gerarNumeroAleatorio();
let = tentativas = 1;

function exibirTextoNatela(tag, texto) {
    let tituloPrincipal = document.querySelector(tag);
    tituloPrincipal.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );

}

function exibirMensageminicial() {
    exibirTextoNatela('h1', 'Jogo do número secreto');
    exibirTextoNatela('p', 'Escolha um número entre 1 a 10');   
 
}

exibirMensageminicial();
document.querySelector('input').focus();

function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log(chute == numeroAleatorio);

    if (chute == numeroAleatorio) {
        chute = document.querySelector('input');
        chute.focus();
        exibirTextoNatela('h1', 'Acertou!');
        let palacraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palacraTentativas}!`;
        exibirTextoNatela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

        
    } else {
        if (chute > numeroAleatorio) {
            exibirTextoNatela('p', 'O número secreto é menor');
            
        } else {
            exibirTextoNatela('p', 'O número secreto é maior');
            
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;     
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
    chute.focus();
}

function reiniciarJogo() {
    numeroAleatorio = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensageminicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    
}



