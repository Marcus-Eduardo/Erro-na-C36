var dataBase;
var estadoJogo = 0;
var jogador, form;
var numJogador = 0;
var jogo;
var jogadores;

function setup() {
  createCanvas(400, 400);

  dataBase = firebase.database();

  jogo = new Jogo();
  jogo.lerEstado();
  jogo.start();
}

function draw() {
  background(255, 255, 255);
  if (numJogador >= 4) {
    jogo.atualizar(1);
  }
  if (estadoJogo === 1) {
    clear();
    jogo.play();
  }
}