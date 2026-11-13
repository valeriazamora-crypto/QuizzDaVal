// Banco de dados com 5 matérias e 15 perguntas cada (75 perguntas no total)
const bancoDePerguntas = {
    historia: [
        { pergunta: "Em que ano ocorreu a Proclamação da República no Brasil?", alternativas: ["1822", "1889", "1500", "1930"], correta: 1 },
        { pergunta: "Quem assinou a Lei Áurea, abolindo a escravidão no Brasil?", alternativas: ["Dom Pedro I", "Dom Pedro II", "Princesa Isabel", "Tiradentes"], correta: 2 },
        { pergunta: "Qual civilização antiga construiu as pirâmides de Gizé?", alternativas: ["Romana", "Grega", "Egípcia", "Maias"], correta: 2 },
        { pergunta: "Em que ano começou a Segunda Guerra Mundial?", alternativas: ["1914", "1939", "1945", "1929"], correta: 1 },
        { pergunta: "Qual navegador português chegou ao Brasil em 1500?", alternativas: ["Vasco da Gama", "Fernão de Magalhães", "Pedro Álvares Cabral", "Cristóvão Colombo"], correta: 2 },
        { pergunta: "O que foi a Revolução Industrial?", alternativas: ["Uma guerra civil na França", "A transição para processos de manufatura com máquinas", "A independência dos EUA", "A queda do Império Romano"], correta: 1 },
        { pergunta: "Quem foi o primeiro presidente do Brasil?", alternativas: ["Getúlio Vargas", "Deodoro da Fonseca", "Juscelino Kubitschek", "Floriano Peixoto"], correta: 1 },
        { pergunta: "Qual muro dividiu a Alemanha durante a Guerra Fria?", alternativas: ["Muro de Berlim", "Muralha da China", "Muro de Adriano", "Muro das Lamentações"], correta: 0 },
        { pergunta: "Qual era o nome do movimento liderado por Tiradentes em Minas Gerais?", alternativas: ["Guerra dos Farrapos", "Inconfidência Mineira", "Cabanagem", "Revolta da Vacina"], correta: 1 },
        { pergunta: "Em que continente surgiu a humanidade segundo os estudos históricos?", alternativas: ["Europa", "Ásia", "África", "América"], correta: 2 },
        { pergunta: "Quem foi o líder da Revolução Cubana de 1959?", alternativas: ["Che Guevara", "Fidel Castro", "Simón Bolívar", "Salvador Allende"], correta: 1 },
        { pergunta: "Qual cidade-estado grega era famosa por sua cultura militar?", alternativas: ["Atenas", "Esparta", "Tebas", "Corinto"], correta: 1 },
        { pergunta: "Em que ano ocorreu a Independência do Brasil?", alternativas: ["1808", "1822", "1888", "1891"], correta: 1 },
        { pergunta: "Qual evento marcou o início da Idade Contemporânea em 1789?", alternativas: ["Queda de Constantinopla", "Revolução Francesa", "Descobrimento da América", "Primeira Guerra Mundial"], correta: 1 },
        { pergunta: "Qual presidente brasileiro construiu Brasília?", alternativas: ["Jânio Quadros", "Getúlio Vargas", "Juscelino Kubitschek", "João Goulart"], correta: 2 }
    ],
    ciencias: [
        { pergunta: "Qual é a fórmula química da água?", alternativas: ["CO2", "H2O", "NaCl", "O2"], correta: 1 },
        { pergunta: "Qual é o maior planeta do Sistema Solar?", alternativas: ["Terra", "Marte", "Júpiter", "Saturno"], correta: 2 },
        { pergunta: "Qual organela celular é responsável pela respiração celular e produção de energia?", alternativas: ["Ribossomo", "Mitocôndria", "Lisossomo", "Núcleo"], correta: 1 },
        { pergunta: "Qual gás as plantas absorvem durante a fotossíntese?", alternativas: ["Oxigênio", "Nitrogênio", "Gás Carbônico", "Hélio"], correta: 2 },
        { pergunta: "Qual é o maior órgão do corpo humano?", alternativas: ["Fígado", "Coração", "Pele", "Intestino"], correta: 2 },
        { pergunta: "Qual é a velocidade aproximada da luz no vácuo?", alternativas: ["300.000 km/s", "150.000 km/s", "340 m/s", "1.000 km/h"], correta: 0 },
        { pergunta: "Qual vitamina é produzida pelo corpo quando tomamos sol?", alternativas: ["Vitamina A", "Vitamina C", "Vitamina D", "Vitamina B12"], correta: 2 },
        { pergunta: "Como se chama a mudança de estado físico do líquido para o gasoso?", alternativas: ["Solidificação", "Fusão", "Vaporização", "Condensação"], correta: 2 },
        { pergunta: "Qual partícula subatômica possui carga elétrica negativa?", alternativas: ["Próton", "Nêutron", "Elétron", "Pósitron"], correta: 2 },
        { pergunta: "Quantos ossos tem aproximadamente um corpo humano adulto?", alternativas: ["106", "206", "306", "406"], correta: 1 },
        { pergunta: "Qual planeta é conhecido como o 'Planeta Vermelho'?", alternativas: ["Vênus", "Marte", "Mercúrio", "Urano"], correta: 1 },
        { pergunta: "Qual é o símbolo químico do Ouro na tabela periódica?", alternativas: ["Ag", "Ou", "Au", "Fe"], correta: 2 },
        { pergunta: "O que mede a escala Richter?", alternativas: ["Temperatura", "Velocidade do vento", "Magnitude de terremotos", "Pressão atmosférica"], correta: 2 },
        { pergunta: "Qual tipo sanguíneo é considerado o doador universal?", alternativas: ["A+", "AB+", "O-", "B-"], correta: 2 },
        { pergunta: "Qual força nos mantém presos à superfície da Terra?", alternativas: ["Magnetismo", "Gravidade", "Inércia", "Atrito"], correta: 1 }
    ],
    matematica: [
        { pergunta: "Qual é o valor da raiz quadrada de 144?", alternativas: ["10", "11", "12", "14"], correta: 2 },
        { pergunta: "Quanto é 15% de 200?", alternativas: ["20", "25", "30", "35"], correta: 2 },
        { pergunta: "Qual é o valor aproximado de Pi (π)?", alternativas: ["2,14", "3,14", "3,41", "4,13"], correta: 1 },
        { pergunta: "Quantos lados tem um hexágono?", alternativas: ["5", "6", "7", "8"], correta: 1 },
        { pergunta: "Resolva a equação: 2x + 6 = 14. Qual o valor de x?", alternativas: ["2", "3", "4", "5"], correta: 2 },
        { pergunta: "Qual é a soma dos ângulos internos de qualquer triângulo?", alternativas: ["90°", "180°", "270°", "360°"], correta: 1 },
        { pergunta: "Quanto é 7 elevado ao quadrado (7²)?", alternativas: ["14", "42", "49", "56"], correta: 2 },
        { pergunta: "Qual é o menor número primo?", alternativas: ["0", "1", "2", "3"], correta: 2 },
        { pergunta: "Se um produto custa R$ 80 e tem 25% de desconto, qual o novo preço?", alternativas: ["R$ 55", "R$ 60", "R$ 65", "R$ 70"], correta: 1 },
        { pergunta: "Quantos minutos existem em 3 horas e meia?", alternativas: ["180", "200", "210", "230"], correta: 2 },
        { pergunta: "Qual é a área de um quadrado cujo lado mede 9 cm?", alternativas: ["18 cm²", "36 cm²", "81 cm²", "90 cm²"], correta: 2 },
        { pergunta: "Quanto é 12 x 8?", alternativas: ["84", "92", "96", "104"], correta: 2 },
        { pergunta: "Em um triângulo retângulo, como se chama o lado oposto ao ângulo reto?", alternativas: ["Cateto", "Hipotenusa", "Base", "Altura"], correta: 1 },
        { pergunta: "Qual é o resultado de 5! (5 fatorial)?", alternativas: ["25", "60", "100", "120"], correta: 3 },
        { pergunta: "Qual fração equivale a 0,75?", alternativas: ["1/4", "1/2", "3/4", "2/3"], correta: 2 }
    ],
    geografia: [
        { pergunta: "Qual é o maior país do mundo em extensão territorial?", alternativas: ["Canadá", "China", "Estados Unidos", "Rússia"], correta: 3 },
        { pergunta: "Qual é o rio mais extenso do mundo?", alternativas: ["Rio Nilo", "Rio Amazonas", "Rio Yangtzé", "Rio Mississipi"], correta: 1 },
        { pergunta: "Em qual continente fica o deserto do Saara?", alternativas: ["Ásia", "América do Sul", "África", "Oceania"], correta: 2 },
        { pergunta: "Qual é a capital da Austrália?", alternativas: ["Sydney", "Melbourne", "Camberra", "Perth"], correta: 2 },
        { pergunta: "Quantos estados possui o Brasil (sem contar o Distrito Federal)?", alternativas: ["24", "25", "26", "27"], correta: 2 },
        { pergunta: "Qual linha imaginária divide a Terra nos hemisférios Norte e Sul?", alternativas: ["Meridiano de Greenwich", "Trópico de Capricórnio", "Linha do Equador", "Trópico de Câncer"], correta: 2 },
        { pergunta: "Qual é o bioma predominante na região Norte do Brasil?", alternativas: ["Cerrado", "Caatinga", "Amazônia", "Pampa"], correta: 2 },
        { pergunta: "Qual oceano banha o litoral brasileiro?", alternativas: ["Oceano Pacífico", "Oceano Índico", "Oceano Atlântico", "Oceano Glacial Ártico"], correta: 2 },
        { pergunta: "Qual é a montanha mais alta do mundo acima do nível do mar?", alternativas: ["Monte Kilimanjaro", "Monte Everest", "Aconcágua", "Monte Fuji"], correta: 1 },
        { pergunta: "Qual país tem a maior população do mundo atualmente?", alternativas: ["China", "Índia", "Estados Unidos", "Indonésia"], correta: 1 },
        { pergunta: "Em qual estado brasileiro fica localizado o Pantanal?", alternativas: ["Amazonas", "Mato Grosso e Mato Grosso do Sul", "Bahia", "Rio Grande do Sul"], correta: 1 },
        { pergunta: "Qual é o menor país do mundo em área territorial?", alternativas: ["Mônaco", "Vaticano", "San Marino", "Malta"], correta: 1 },
        { pergunta: "Como se chama o movimento que a Terra faz em torno do próprio eixo?", alternativas: ["Translação", "Rotação", "Precessão", "Nutação"], correta: 1 },
        { pergunta: "Qual desses países NÃO faz fronteira com o Brasil?", alternativas: ["Argentina", "Chile", "Colômbia", "Peru"], correta: 1 },
        { pergunta: "Qual é a capital do estado do Paraná?", alternativas: ["Londrina", "Maringá", "Curitiba", "Foz do Iguaçu"], correta: 2 }
    ],
    portugues: [
        { pergunta: "Quem escreveu a famosa obra 'Dom Casmurro'?", alternativas: ["Machado de Assis", "José de Alencar", "Clarice Lispector", "Monteiro Lobato"], correta: 0 },
        { pergunta: "Qual é o plural correto da palavra 'cidadão'?", alternativas: ["Cidadões", "Cidadãos", "Cidadães", "Cidadãoses"], correta: 1 },
        { pergunta: "Na frase 'O gato dormiu no sofá', qual é a classe gramatical da palavra 'dormiu'?", alternativas: ["Substantivo", "Adjetivo", "Verbo", "Advérbio"], correta: 2 },
        { pergunta: "Qual figura de linguagem ocorre em 'Estou morrendo de fome'?", alternativas: ["Metáfora", "Hipérbole", "Ironia", "Eufemismo"], correta: 1 },
        { pergunta: "Qual destas palavras é proparoxítona?", alternativas: ["Café", "Árvore", "Caderno", "Abacaxi"], correta: 1 },
        { pergunta: "Quem é o autor da série infantil 'Sítio do Picapau Amarelo'?", alternativas: ["Ziraldo", "Mauricio de Sousa", "Monteiro Lobato", "Ruth Rocha"], correta: 2 },
        { pergunta: "Qual é o antônimo da palavra 'efêmero'?", alternativas: ["Passageiro", "Duradouro", "Rápido", "Frágil"], correta: 1 },
        { pergunta: "Qual alternativa apresenta um erro de ortografia?", alternativas: ["Exceção", "Privilégio", "Beneficente", "Advinhar"], correta: 3 },
        { pergunta: "Na oração 'Choveu muito ontem', o sujeito é classificado como:", alternativas: ["Sujeito simples", "Sujeito oculto", "Oração sem sujeito", "Sujeito composto"], correta: 2 },
        { pergunta: "Qual movimento literário teve início no Brasil com a Semana de Arte Moderna de 1922?", alternativas: ["Romantismo", "Barroco", "Modernismo", "Realismo"], correta: 2 },
        { pergunta: "Qual palavra completa corretamente: 'Ele não veio ___ estava doente'?", alternativas: ["por que", "por quê", "porque", "porquê"], correta: 2 },
        { pergunta: "O que é um substantivo coletivo de 'lobos'?", alternativas: ["Cardume", "Alcateia", "Manada", "Enxame"], correta: 1 },
        { pergunta: "Qual é o sujeito da frase: 'Os alunos estudaram para a prova'?", alternativas: ["Os alunos", "estudaram", "para a prova", "a prova"], correta: 0 },
        { pergunta: "Qual sinal de pontuação é usado para indicar uma pergunta direta?", alternativas: ["Ponto de exclamação", "Ponto e vírgula", "Ponto de interrogação", "Reticências"], correta: 2 },
        { pergunta: "Qual destas palavras possui um dígrafo?", alternativas: ["Prato", "Chuva", "Livro", "Gato"], correta: 1 }
    ]
};

const premios = [1000, 10000, 50000, 100000, 1000000];

// Guarda os índices das perguntas já sorteadas para cada uma das 5 matérias
const indicesUsados = {
    historia: [],
    ciencias: [],
    matematica: [],
    geografia: [],
    portugues: []
};

let materiaAtual = "historia";
let perguntasDaRodada = [];
let perguntaAtual = 0;
let premioAtual = 0;
let respondeu = false;

// Seleção de elementos do DOM
const seletorMateriaE = document.getElementById("seletor-materia");
const rodadaInfoE = document.getElementById("rodada-info");
const perguntaE = document.getElementById("pergunta");
const alternativasE = document.getElementById("alternativas");
const mensagemE = document.getElementById("mensagem");
const numeroPerguntaE = document.getElementById("numero-pergunta");
const premioE = document.getElementById("premio");
const proximaE = document.getElementById("proxima");

// Sorteia 5 perguntas inéditas da matéria escolhida
function iniciarNovaRodada(materia) {
    materiaAtual = materia;
    perguntaAtual = 0;
    premioAtual = 0;
    proximaE.textContent = "Próxima Pergunta";
    proximaE.onclick = null;

    const todasDaMateria = bancoDePerguntas[materia];
    let usadas = indicesUsados[materia];

    // Se todas as 15 perguntas já foram usadas (após 3 rodadas), reinicia o histórico da matéria
    if (usadas.length >= todasDaMateria.length) {
        indicesUsados[materia] = [];
        usadas = indicesUsados[materia];
    }

    // Atualiza o indicador de qual rodada (1, 2 ou 3) o aluno está jogando naquela matéria
    const numeroRodada = Math.floor(usadas.length / 5) + 1;
    rodadaInfoE.textContent = `Rodada ${numeroRodada} de 3`;

    // Filtra apenas os índices das perguntas que ainda não apareceram
    const indicesDisponiveis = [];
    for (let i = 0; i < todasDaMateria.length; i++) {
        if (!usadas.includes(i)) {
            indicesDisponiveis.push(i);
        }
    }

    // Embaralha os índices disponíveis e pega 5
    indicesDisponiveis.sort(() => Math.random() - 0.5);
    const sorteados = indicesDisponiveis.slice(0, 5);

    // Salva os índices sorteados como "já usados" e monta a lista da rodada
    perguntasDaRodada = sorteados.map(indice => {
        usadas.push(indice);
        return todasDaMateria[indice];
    });

    carregarPergunta();
}

function carregarPergunta() {
    respondeu = false;
    proximaE.disabled = true;
    mensagemE.textContent = "";
    alternativasE.innerHTML = "";

    const item = perguntasDaRodada[perguntaAtual];

    perguntaE.textContent = item.pergunta;
    numeroPerguntaE.textContent = `Pergunta ${perguntaAtual + 1} de ${perguntasDaRodada.length}`;
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

    const item = perguntasDaRodada[perguntaAtual];
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

// Evento para trocar de matéria a qualquer momento
seletorMateriaE.addEventListener("change", (evento) => {
    iniciarNovaRodada(evento.target.value);
});

proximaE.addEventListener("click", () => {
    perguntaAtual++;

    if (perguntaAtual < perguntasDaRodada.length) {
        carregarPergunta();
    } else {
        finalizarJogo();
    }
});

function finalizarJogo() {
    perguntaE.textContent = "Fim da Rodada!";
    alternativasE.innerHTML = "";
    numeroPerguntaE.textContent = "Concluído";

    const restantes = 15 - indicesUsados[materiaAtual].length;
    const aviso = restantes > 0 
        ? `Ainda restam ${restantes} perguntas inéditas nesta matéria!` 
        : `Você completou todas as 15 perguntas desta matéria!`;

    mensagemE.style.color = "#ffd700";
    mensagemE.textContent = `Você ganhou R$ ${premioAtual.toLocaleString("pt-BR")}! ${aviso}`;

    proximaE.textContent = "Jogar Novamente (Novas Perguntas)";
    proximaE.disabled = false;

    proximaE.onclick = () => {
        iniciarNovaRodada(materiaAtual);
    };
}

// Inicia o jogo na primeira matéria
iniciarNovaRodada("historia");