let jogada = 0;
let x = "X";
let o = "O";
let pontosX = 0;
let pontosO = 0;
let comecar = false;
let q1 = document.getElementById("q1");
let q2 = document.getElementById("q2");
let q3 = document.getElementById("q3");
let q4 = document.getElementById("q4");
let q5 = document.getElementById("q5");
let q6 = document.getElementById("q6");
let q7 = document.getElementById("q7");
let q8 = document.getElementById("q8");
let q9 = document.getElementById("q9");
let hPontosX = document.getElementById("hPontosX");
let hPontosO = document.getElementById("hPontosO");

function Comecar() {
    let inputJogador = document.getElementById("jogador");
    let jogador = document.getElementById("jogador").value;
    let bntComecar = document.getElementById("comecar");
    if (jogador == 1) {
        jogada = 0;
        inputJogador.style.display = "none";
        bntComecar.style.display = "none";
        comecar = true;
    } else if (jogador == 2) {
        jogada = 1;
        inputJogador.style.display = "none";
        bntComecar.style.display = "none";
        comecar = true;
    } else {
        alert("Insira um número válido!");
    }
}

function Jogar(num) {
    let botao = document.getElementById("q" + num);
    if (comecar == false) {
        alert("Clique em 'Começar' para iniciar o jogo!");
    }
    else if (botao.textContent !== "") {
        alert("Não se pode jogar aqui!");
    }
    else if (jogada % 2 == 0) {
        jogada += 1;
        botao.textContent = x;
        Verificar(botao.textContent, "x");
    }
    else {
        jogada += 1;
        botao.textContent = o;
        Verificar(botao.textContent, "o");
    }
}

function Verificar(botaoc, letraJog) {
    let q1c = document.getElementById("q1").textContent;
    let q2c = document.getElementById("q2").textContent;
    let q3c = document.getElementById("q3").textContent;
    let q4c = document.getElementById("q4").textContent;
    let q5c = document.getElementById("q5").textContent;
    let q6c = document.getElementById("q6").textContent;
    let q7c = document.getElementById("q7").textContent;
    let q8c = document.getElementById("q8").textContent;
    let q9c = document.getElementById("q9").textContent;

    if ((q1c !== "" && q1c === q2c && q2c === q3c) || (q1c !== "" && q1c == q4c && q4c == q7c) || (q1c !== "" && q1c === q5c && q5c === q9c) || (q3c !== "" && q3c === q5c && q5c === q7c) || (q7c !== "" && q7c === q8c && q8c === q9c) || (q3c !== "" && q3c === q6c && q6c === q9c) || (q2c !== "" && q2c === q5c && q5c === q8c) || (q4c !== "" && q4c === q5c && q5c === q6c)) {
        console.log(`${botaoc} ganhou!`);
        alert(`${botaoc} ganhou!`);
        Limpar();
        if (letraJog == "x") {
            pontosX++;
            hPontosX.textContent = "Pontos X: " + pontosX;
        }
        else if (letraJog == "o") {
            pontosO++;
            hPontosO.textContent = "Pontos O: " + pontosO;
        }
    }
    else if (q1c !== "" && q2c !== "" && q3c !== "" && q4c !== "" && q5c !== "" && q6c !== "" && q7c !== "" && q8c !== "" && q9c !== "") {
        console.log("Empate!");
        alert("Empate!");
        Limpar();
    }
}

function Limpar() {
    q1.textContent = "";
    q2.textContent = "";
    q3.textContent = "";
    q4.textContent = "";
    q5.textContent = "";
    q6.textContent = "";
    q7.textContent = "";
    q8.textContent = "";
    q9.textContent = "";
}