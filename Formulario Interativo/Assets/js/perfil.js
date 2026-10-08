document.getElementById("nome").textContent =
    localStorage.getItem("nome");

document.getElementById("idade").textContent =
    localStorage.getItem("idade");

document.getElementById("bio").textContent =
    localStorage.getItem("bio");

document.getElementById("corFavorita").style.backgroundColor =
    localStorage.getItem("cor");

document.getElementById("foto").src =
    localStorage.getItem("imagem");

const cor = localStorage.getItem("cor");

document.body.style.backgroundColor = cor;

function corTexto(corHex) {
    let r = parseInt(corHex.substr(1, 2), 16);
    let g = parseInt(corHex.substr(3, 2), 16);
    let b = parseInt(corHex.substr(5, 2), 16);

    let brilho = (r * 299 + g * 587 + b * 114) / 1000;

}

document.body.style.color = corTexto(cor);

const lista = document.getElementById("interesses");

lista.innerHTML = `
    <li>Jogo: ${localStorage.getItem("jogo")}</li>
    <li>Música: ${localStorage.getItem("musica")}</li>
    <li>Filme: ${localStorage.getItem("filme")}</li>
    <li>Interesse: ${localStorage.getItem("interesse")}</li>
`;


const runners = document.querySelectorAll(".runner");

const posicoes = [];
const velocidades = [];

runners.forEach((runner, i) => {

    posicoes[i] = -i * 200;

    velocidades[i] = 3 + Math.random() * 2;

    runner.style.left = posicoes[i] + "px";
});

function correr(){

    runners.forEach((runner, i) => {

        posicoes[i] += velocidades[i];

        if(posicoes[i] > window.innerWidth + 100){
            posicoes[i] = -100;
        }

        runner.style.left = posicoes[i] + "px";
    });

    requestAnimationFrame(correr);
}

correr();