const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const jogo = document.getElementById("jogo");
    const musica = document.getElementById("musica");
    const filme = document.getElementById("filme");
    const interesse = document.getElementById("interesse");

    localStorage.setItem("nome", document.getElementById("nome").value);
    localStorage.setItem("idade", document.getElementById("idade").value);
    localStorage.setItem("bio", document.getElementById("bio").value);
    localStorage.setItem("cor", document.getElementById("cor").value);
    localStorage.setItem("jogo", jogo.value);
    localStorage.setItem("musica", musica.value);
    localStorage.setItem("filme", filme.value);
    localStorage.setItem("interesse", interesse.value);

    localStorage.setItem(
        "imagem",
        document.getElementById("imagem").value
    );

    window.location.href = "perfilpersonalizado.html";
});