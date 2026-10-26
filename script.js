const perguntas = [
    {
        pergunta: "Qual linguagem é usada para estruturar páginas web?",
        alternativas: ["CSS", "HTML", "Python", "JavaScript"],
        correta: 1
    },
    {
        pergunta: "Em que ano ocorreu a Proclamação da República no Brasil?",
        alternativas: ["1822", "1889", "1500", "1930"],
        correta: 1
    },
    {
        pergunta: "Qual é a fórmula química da água?",
        alternativas: ["CO2", "H2O", "NaCl", "O2"],
        correta: 1
    },
    {
        pergunta: "Quem é o autor da famosa obra literária 'Dom Casmurro'?",
        alternativas: ["Machado de Assis", "José de Alencar", "Clarice Lispector", "Castro Alves"],
        correta: 0
    },
    {
        pergunta: "Qual é o valor da raiz quadrada de 144?",
        alternativas: ["10", "11", "12", "14"],
        correta: 2
    },
    {
        pergunta: "Qual é o maior país do mundo em extensão territorial?",
        alternativas: ["Canadá", "China", "Estados Unidos", "Rússia"],
        correta: 3
    },
    {
        pergunta: "Qual figura de linguagem expressa um exagero intencional?",
        alternativas: ["Metáfora", "Hipérbole", "Eufemismo", "Ironia"],
        correta: 1
    },
    {
        pergunta: "Quanto vale a soma dos ângulos internos de um triângulo?",
        alternativas: ["90°", "180°", "360°", "270°"],
        correta: 1
    },
    {
        pergunta: "Qual organela celular produz energia na respiração celular?",
        alternativas: ["Ribossomo", "Complexo de Golgi", "Mitocôndria", "Lisossomo"],
        correta: 2
    },
    {
        pergunta: "Qual oceano banha o litoral do Brasil?",
        alternativas: ["Pacífico", "Índico", "Atlântico", "Glacial Ártico"],
        correta: 2
    },
    {
        pergunta: "Qual elemento é mais abundante na atmosfera terrestre?",
        alternativas: ["Oxigênio", "Nitrogênio", "Gás Carbônico", "Hidrogênio"],
        correta: 1
    },
    {
        pergunta: "Em qual continente começou a Revolução Industrial?",
        alternativas: ["América", "Ásia", "Europa", "África"],
        correta: 2
    },
    {
        pergunta: "Qual é o resultado da expressão matemática: 2 + 3 x 4?",
        alternativas: ["20", "14", "18", "12"],
        correta: 1
    },
    {
        pergunta: "Qual processo as plantas usam para produzir seu alimento?",
        alternativas: ["Fotossíntese", "Quimiossíntese", "Fermentação", "Transpiração"],
        correta: 0
    },
    {
        pergunta: "Qual é o maior bioma brasileiro em extensão?",
        alternativas: ["Cerrado", "Mata Atlântica", "Amazônia", "Caatinga"],
        correta: 2
    },
    {
        pergunta: "Qual é a velocidade aproximada da luz no vácuo?",
        alternativas: ["300.000 km/s", "150.000 km/s", "1.000.000 km/s", "30.000 km/s"],
        correta: 0
    },
    {
        pergunta: "Quem formulou as Três Leis do Movimento e a Gravitação?",
        alternativas: ["Albert Einstein", "Isaac Newton", "Galileu Galilei", "Nikola Tesla"],
        correta: 1
    },
    {
        pergunta: "Qual é a unidade de medida de força no Sistema Internacional?",
        alternativas: ["Joule", "Pascal", "Watt", "Newton"],
        correta: 3
    },
    {
        pergunta: "Como se chama um polígono regular de 8 lados?",
        alternativas: ["Hexágono", "Heptágono", "Octógono", "Decágono"],
        correta: 2
    },
    {
        pergunta: "Qual evento em 1789 marcou o início da Idade Contemporânea?",
        alternativas: ["Segunda Guerra Mundial", "Descobrimento do Brasil", "Revolução Francesa", "Queda de Roma"],
        correta: 2
    }
];

const premios = [
    1000, 2000, 3000, 4000, 5000, 
    10000, 20000, 30000, 40000, 50000, 
    100000, 150000, 200000, 300000, 400000, 
    500000, 600000, 700000, 800000, 1000000
];

let perguntaAtual = 0;
let premioAtual = 0;
let respondeu = false;

const perguntaE = document.getElementById("pergunta");
const alternativasE = document.getElementById("alternativas");
const mensagemE = document.getElementById("mensagem");
const numeroPerguntaE = document.getElementById("numero-pergunta");
const premioE = document.getElementById("premio");
const proximaE = document.getElementById("proxima");

function carregarPergunta() {
    respondeu = false;
    proximaE.disabled = true;
    mensagemE.textContent = "";
    alternativasE.innerHTML = "";

    const item = perguntas[perguntaAtual];

    perguntaE.textContent = item.pergunta;
    numeroPerguntaE.textContent = `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;
    premioE.textContent = `Prêmio: R$ ${premioAtual.toLocaleString("pt-BR")}`;

    item.alternativas.forEach((texto, indice) => {
        const botao = document.createElement("button");
        botao.classList.add("alternativa");
        
        const letra = String.fromCharCode(65 + indice);
        botao.textContent = `${letra}) ${texto}`;

        botao.addEventListener("click", () => verificarResposta(indice, botao));
        alternativasE.appendChild(botao);
    });
}

function verificarResposta(indiceEscolhido, botaoEscolhido) {
    if (respondeu) return;
    respondeu = true;

    const item = perguntas[perguntaAtual];
    const todosBotoes = document.querySelectorAll(".alternativa");

    todosBotoes.forEach(botao => botao.disabled = true);

    if (indiceEscolhido === item.correta) {
        botaoEscolhido.classList.add("correta");
        premioAtual = premios[perguntaAtual];
        mensagemE.style.color = "#55a630";
        mensagemE.textContent = "Resposta correta! Você avançou!";
    } else {
        botaoEscolhido.classList.add("errada");
        
        todosBotoes[item.correta].classList.add("correta");
        mensagemE.style.color = "#ef233c";
        mensagemE.textContent = "Resposta incorreta!";
    }

    premioE.textContent = `Prêmio: R$ ${premioAtual.toLocaleString("pt-BR")}`;
    proximaE.disabled = false;
}

proximaE.addEventListener("click", () => {
    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {
        carregarPergunta();
    } else {
        finalizarJogo();
    }
});

function finalizarJogo() {
    perguntaE.textContent = "Fim de Jogo!";
    alternativasE.innerHTML = "";
    numeroPerguntaE.textContent = "Quiz Concluído";

    mensagemE.style.color = "#ffd700";
    mensagemE.textContent = `Parabéns! Você concluiu o quiz e acumulou R$ ${premioAtual.toLocaleString("pt-BR")}!`;

    proximaE.textContent = "Jogar Novamente";
    proximaE.disabled = false;

    proximaE.onclick = () => {
        perguntaAtual = 0;
        premioAtual = 0;
        proximaE.textContent = "Próxima Pergunta";
        proximaE.onclick = null;
        carregarPergunta();
    };
}

carregarPergunta();