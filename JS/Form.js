class Form{
    constructor(){
        this.titulo = createElement("h2","Jogo de corrida");
        this.entrada = createInput("Nome:");
        this.ola = createElement("h3");
        this.botao = createButton("JOGAR");
    }
    display(){
        
        this.titulo.position(130,0);

        this.entrada.position(130,160);

        this.botao.position(250,250);
        this.botao.mousePressed(()=>{

            this.entrada.hide();
            this.botao.hide();

            jogador.nome = this.entrada.value();
            jogador.update();

            numJogador++;
            jogador.updateNum(numJogador);

            this.ola.html("Olá "+jogador.nome);
            this.ola.position(150,160);
        })
    }
    esconder(){
        this.titulo.hide(); 
        this.entrada.hide(); 
        this.ola.hide(); 
        this.botao.hide();
    }
}