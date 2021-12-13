class Jogo{
    constructor(){
    }
    lerEstado(){
        var EstadoRef = dataBase.ref("estadoJogo");
        EstadoRef.on("value",function(dados){
            estadoJogo = dados.val();
        })
    }
    atualizar(estado){
        dataBase.ref("/").update({
            estadoJogo : estado
        })
    }
    start(){
        if(estadoJogo === 0){
            jogador = new Jogador();
            jogador.lerNum();
            form = new Form();
            form.display();
        }

    }
    play(){
        form.esconder();
        textSize(30);
        text("A corrida começou",120,100);
        Jogador.lerinfojogadores();
        if(jogadores !== undefined){
            var textY = 130;

            for(let i in jogadores){
                textY += 20;
                textSize(15)
                text(jogadores[i].nome +": "+ jogadores[i].distancia,120,textY)
            }
        }
        if(keyDown("up")&& jogador.indice !== null ){
            jogador.distancia +=50
            jogador.update();
        }
    }
}