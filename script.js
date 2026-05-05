
async function cliqueiNoBotao() {
    let cidade = document.querySelector(".input-cidade").value;
    let chave = "e6c9d4cd83bee0daecc24162fafa3edd";
    let caixa = document.querySelector(".caixa-media");
   

    let endereco = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave}&units=metric&lang=pt_br`;
   
   
    let respostaServidor = await fetch(endereco);
    let dadosJson = await respostaServidor.json();

caixa.innerHTML = `
<h2 class="cidade">${dadosJson.name}</h2>
<p class="temp">${Math.floor(dadosJson.main.temp)}°C</p>
<img class="icone" src="https://openweathermap.org/img/wn/${dadosJson.weather[0].icon}.png">
<p class="umidade">Umidade: ${dadosJson.main.humidity}%</p>
<button class="botao-ia" onclick="pedirSugestaoRoupa()">Sugestão de Roupas</button>
<p class="resposta-ia">Resposta da IA</p>
`;

}

function detectarVoz() {
    let reconhecimento = new webkitSpeechRecognition();
    reconhecimento.lang = "pt-BR";
    reconhecimento.start();

    reconhecimento.onresult = function(evento) {
        let textoTranscrito = evento.results[0][0].transcript;
        document.querySelector(".input-cidade").value = textoTranscrito;
        cliqueiNoBotao();
    }

}
async function pedirSugestaoRoupa() {
    console.log("Função IA chamada");

    let temperatura = document.querySelector(".temp")?.textContent.replace("°C", "");
    let umidade = document.querySelector(".umidade")?.textContent.replace("Umidade: ", "").replace("%", "");
    let cidade = document.querySelector(".cidade")?.textContent;

    let respostaIA = document.querySelector(".resposta-ia");

    if (!temperatura || !umidade || !cidade) {
        respostaIA.innerHTML = "Busque o clima primeiro!";
        return;
    }

    respostaIA.innerHTML = "Carregando...";

    try {
        let resposta = await fetch("http://localhost:3000/ia", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                cidade,
                temperatura,
                umidade
            })
        });

        if (!resposta.ok) {
            respostaIA.innerHTML = "Erro na API 😢";
            return;
        }

        let dados = await resposta.json();

        respostaIA.innerHTML = dados.resposta;

    } catch (erro) {
        console.error(erro);
        respostaIA.innerHTML = "Erro ao buscar sugestão 😢";
    }
}