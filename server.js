console.log("SERVIDOR INICIANDO 🚀");


const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;

const chaveIA = "";

app.post("/ia", async (req, res) => {
    const { cidade, temperatura, umidade } = req.body;

    try {
        const resposta = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + chaveIA
            },
            body: JSON.stringify({
                model: "meta-llama/llama-4-scout-17b-16e-instruct",
                messages: [
                    {
                        role: "user",
                        content: `Cidade: ${cidade}, temperatura: ${temperatura} graus, umidade: ${umidade}%. Sugira roupas em 2 frases curtas.`
                    }
                ]
            })
        });

        const dados = await resposta.json();

        // 🔴 MOSTRA O ERRO REAL NO TERMINAL
        console.log("RESPOSTA DA API:", dados);

        // ❌ Se deu erro na API
        if (!resposta.ok) {
            return res.status(400).json(dados);
        }

        // ✅ Retorna só o texto limpo
       if (!dados.choices || !dados.choices[0]) {
    return res.status(400).json({
        erro: "Resposta inválida da API",
        detalhes: dados
    });
}

const texto = dados.choices[0].message.content;

        res.json({ resposta: texto });

    } catch (erro) {
        console.error("ERRO NO SERVIDOR:", erro);
        res.status(500).json({ erro: "Erro no servidor" });
    }
});

app.listen(PORT, () => {
    console.log("Servidor rodando na porta " + PORT);
});