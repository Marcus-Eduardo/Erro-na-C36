class Jogador {
    constructor() {
        this.indice = null;
        this.nome = null; //! tinha um sinal de menos em vez de um sinal de igual
        this.distancia = 0;
    }
    lerNum() {
        var refNum = dataBase.ref("numJogadores");
        refNum.on("value", function (dados) {
            numJogador = dados.val();
        });
    }
    updateNum(num) {
        dataBase.ref("/").update({
            numJogadores: num
        });
    }
    update() {
        var indiceJogador = "Jogadores/Jogador" + jogador.indice;//! atualizei para índice do jogador em vez de número de jogadores, já que o número continuará aumentando
        dataBase.ref(indiceJogador).set({
            nome: this.nome,
            distancia: this.distancia
        });
    }
    static lerinfojogadores() {
        var jogadoresRef = dataBase.ref("Jogadores");
        jogadoresRef.on("value", function (dados) {
            jogadores = dados.val();
        });
    }
}