class Jogador{
    constructor(){
        this.indice = null;
        this.nome - null;
        this.distancia = 0;
    }
    lerNum(){
        var refNum = dataBase.ref("numJogadores");
        refNum.on("value",function(dados){
            numJogador = dados.val();
        })
    }
    updateNum(num){
        dataBase.ref("/").update({
            numJogadores: num
        })
    }
    update(){
        var indiceJogador = "Jogadores/Jogador"+numJogador
        dataBase.ref(indiceJogador).set({
            nome : this.nome,
            distancia : this.distancia
        })
    }
    static lerinfojogadores(){
        var jogadoresRef = dataBase.ref("Jogadores");
        jogadoresRef.on("value",function(dados){
            jogadores = dados.val();
        })
    }
}