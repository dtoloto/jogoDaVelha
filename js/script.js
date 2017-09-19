var aux = false;
var cont = -1;
var jogada = 0;
var jogador;


function iniciarJogo() {
    if (aux==false) {
        jogador = confirm("Pressione 'OK' para escolher Azul e 'Cancel' para escolher Vermelho");
        document.getElementById("botao").innerHTML = "Reiniciar Jogo";
        aux=true;
    } else {
        var reload = confirm("Deseja mesmo reiniciar o jogo?");
        if(reload == true){
            location.reload();
        }
    }
}

function teste(elemento) {

    if (aux == false) {
        iniciarJogo();
    }
    if(jogador == true){
        if (jogada%2 == 0) {
            document.getElementById(elemento.id).classList.add("azul");
            document.getElementById(elemento.id).removeAttribute("onclick");
            console.log(elemento.id);

        } else{
            document.getElementById(elemento.id).classList.add("vermelho");
            document.getElementById(elemento.id).removeAttribute("onclick");
            console.log(elemento.id);
        }
        jogada++;
    }

    if(jogador == false){
        if (jogada%2 != 0) {
            document.getElementById(elemento.id).classList.add("azul");
            document.getElementById(elemento.id).removeAttribute("onclick");
            console.log(elemento.id);
        } else{
            document.getElementById(elemento.id).classList.add("vermelho");
            document.getElementById(elemento.id).removeAttribute("onclick");
            console.log(elemento.id);
        }
        jogada++;
    }


}
