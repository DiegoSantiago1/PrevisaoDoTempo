# 🌤️ Previsão do Tempo com Sugestão de Roupas (IA)

Aplicação web que exibe a previsão do tempo em tempo real e utiliza inteligência artificial para sugerir roupas com base nas condições climáticas.

---

## 🚀 Funcionalidades

* 🔎 Busca de clima por cidade
* 🎤 Entrada por voz (reconhecimento de fala)
* 🌡️ Exibição de temperatura e umidade
* 🤖 Sugestão de roupas com IA
* 🌐 Integração com APIs externas

---

## 🛠️ Tecnologias utilizadas

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express
* API Groq (IA)

### APIs

* OpenWeatherMap (clima)
* Groq (inteligência artificial)

---

## 📂 Estrutura do projeto

```
PrevisaoDoTempo/
│
├── index.html
├── style.css
├── script.js
├── server.js
├── package.json
├── img/
└── README.md
```

---

## ⚙️ Como rodar o projeto

### 1. Clone o repositório

```
git clone https://github.com/seu-usuario/seu-repo.git
```

### 2. Acesse a pasta

```
cd PrevisaoDoTempo
```

### 3. Instale as dependências

```
npm install
```

### 4. Inicie o servidor

```
node server.js
```

### 5. Abra o projeto

Abra o arquivo `index.html` no navegador
(ou use extensão Live Server no VS Code)

---

## 🔐 Segurança

A chave da API de IA **não fica exposta no frontend**, sendo protegida no backend.

---

## 💡 Como funciona

1. O usuário digita ou fala o nome da cidade
2. O sistema consulta a API de clima
3. Exibe temperatura e umidade
4. Envia os dados para o backend
5. O backend consulta a IA
6. Retorna uma sugestão de roupa personalizada

---

## 📸 Preview

*(adicione aqui um print do seu projeto depois)*

---

## 📈 Melhorias futuras

* 🌍 Deploy online (Render/Vercel)
* 📱 Responsividade mobile
* 🎨 Melhorias no design
* ⚡ Loading e animações
* 🔁 Cache de requisições

---

## 👨‍💻 Autor

Diego Santiago

---

## 📄 Licença

Este projeto está sob a licença MIT.
