// --- DADOS DO QUIZ (Total de 14 perguntas) ---
const quizQuestions_ALL = [
    // 7 Perguntas Iniciais
    {
        question: "Qual tipo de plástico é usado em garrafas de água e refrigerante? (É o código 1)",
        options: [
            { text: "PET", isCorrect: true },
            { text: "PVC", isCorrect: false },
            { text: "PS (Poliestireno)", isCorrect: false },
            { text: "HDPE", isCorrect: false }
        ]
    },
    {
        question: "Qual tipo de plástico NÃO deve ser reutilizado para guardar comida? (Geralmente é fino e mole)",
        options: [
            { text: "Plástico de embalagem de sabão em pó (HDPE - 2)", isCorrect: false },
            { text: "PET de refrigerante (1)", isCorrect: false },
            { text: "Plástico 7 (Outros) ou 3 (PVC)", isCorrect: true },
            { text: "PP de potes de micro-ondas (5)", isCorrect: false }
        ]
    },
    {
        question: "Para o código 3 (PVC), por que ele é mais difícil de reciclar que os outros?",
        options: [
            { text: "Ele flutua na água e se perde.", isCorrect: false },
            { text: "Ele contém cloro e libera substâncias tóxicas.", isCorrect: true },
            { text: "É muito duro e quebra as máquinas.", isCorrect: false },
            { text: "É usado apenas em brinquedos.", isCorrect: false }
        ]
    },
    {
        question: "Qual tipo de plástico é o Isopor? (Código 6)",
        options: [
            { text: "Código 4 (LDPE)", isCorrect: false },
            { text: "Poliestireno (PS)", isCorrect: true },
            { text: "Código 2 (HDPE)", isCorrect: false },
            { text: "Código 5 (PP)", isCorrect: false }
        ]
    },
    {
        question: "Qual é o plástico rígido e opaco, usado em jarras de leite e frascos de shampoo? (Código 2)",
        options: [
            { text: "Polipropileno (PP)", isCorrect: false },
            { text: "Polietileno de Alta Densidade (HDPE)", isCorrect: true },
            { text: "PET", isCorrect: false },
            { text: "Policloreto de Vinila (PVC)", isCorrect: false }
        ]
    },
    {
        question: "Quais potes e embalagens de plástico não devem ser aquecidos no micro-ondas?",
        options: [
            { text: "Potes com o símbolo 5 (PP)", isCorrect: false },
            { text: "Potes de sorvete ou margarina (Códigos 1, 3, 6, 7)", isCorrect: true },
            { text: "Garrafas de água (PET)", isCorrect: false },
            { text: "Embalagens de pão (LDPE)", isCorrect: false }
        ]
    },
    {
        question: "Qual tipo de plástico é o mais comum para sacolas finas e filmes plásticos? (Código 4)",
        options: [
            { text: "Alta Densidade (HDPE)", isCorrect: false },
            { text: "Policloreto de Vinila (PVC)", isCorrect: false },
            { text: "Baixa Densidade (LDPE)", isCorrect: true },
            { text: "Isopor (PS)", isCorrect: false }
        ]
    },
    
    // 7 Perguntas Adicionais
    {
        question: "Qual cor de lixeira é usada para reciclar Plástico?",
        options: [
            { text: "Verde", isCorrect: false },
            { text: "Amarelo", isCorrect: false },
            { text: "Vermelho", isCorrect: true },
            { text: "Azul", isCorrect: false }
        ]
    },
    {
        question: "O símbolo da reciclagem (o triângulo com setas) significa que o material:",
        options: [
            { text: "É tóxico", isCorrect: false },
            { text: "Deve ser reutilizado", isCorrect: false },
            { text: "Pode ser reprocessado (Reciclado)", isCorrect: true },
            { text: "Não tem valor", isCorrect: false }
        ]
    },
    {
        question: "Qual dos itens abaixo NÃO é considerado plástico reciclável na maioria dos lugares?",
        options: [
            { text: "Garrafa PET de refrigerante", isCorrect: false },
            { text: "Escova de dentes e cabo de caneta", isCorrect: true },
            { text: "Embalagens de shampoo", isCorrect: false },
            { text: "Potes de margarina", isCorrect: false }
        ]
    },
    {
        question: "O código 5 (PP) é o mais usado para qual tipo de embalagem?",
        options: [
            { text: "Sacolas de supermercado", isCorrect: false },
            { text: "Talheres e pratos descartáveis", isCorrect: false },
            { text: "Potes de iogurte e margarina", isCorrect: true },
            { text: "Canudos de plástico", isCorrect: false }
        ]
    },
    {
        question: "O que significa a palavra 'Reutilizar' na reciclagem?",
        options: [
            { text: "Jogar fora no lixo certo", isCorrect: false },
            { text: "Criar um novo produto", isCorrect: false },
            { text: "Usar o objeto várias vezes para a mesma função ou outra", isCorrect: true },
            { text: "Queimar o lixo", isCorrect: false }
        ]
    },
    {
        question: "Qual dos seguintes plásticos é o mais difícil de reciclar por ser leve e sujo?",
        options: [
            { text: "PET (Código 1)", isCorrect: false },
            { text: "PVC (Código 3)", isCorrect: false },
            { text: "Sacolas e filmes finos (Código 4)", isCorrect: true },
            { text: "HDPE (Código 2)", isCorrect: false }
        ]
    },
    {
        question: "O que o número 7 dentro do símbolo de reciclagem indica?",
        options: [
            { text: "Que o plástico é 100% puro", isCorrect: false },
            { text: "Que o plástico é misturado ou de um tipo não listado (Outros)", isCorrect: true },
            { text: "Que é o melhor plástico de todos", isCorrect: false },
            { text: "Que deve ser sempre jogado no lixo comum", isCorrect: false }
        ]
    }
];


// --- VARIÁVEIS DE ESTADO ---
let currentQuestionIndex = 0;
let score = 0;
let startTime;
let timerInterval;
let playerName = 'Jogador';
let totalTimeMs = 0;
let totalErrors = 0;
let currentQuizSet = []; 
let selectedAnswer = null; 
let isAnswerConfirmed = false; 
let quizResults = []; 

// --- CONSTANTES E DADOS FIXOS ---
const MAX_NAME_LENGTH = 25; 
const QUIZ_SIZE = 7; 
const POINTS_PER_QUESTION = 100 / QUIZ_SIZE; 

// --- ELEMENTOS DO DOM ---
const startScreen = document.getElementById('start-screen');
const quizArea = document.getElementById('quiz-area');
const resultScreen = document.getElementById('result-screen');
const adminPanel = document.getElementById('admin-panel');
const fullScreenMessage = document.getElementById('fullscreen-message');

const startButton = document.getElementById('start-button');
const playerNameInput = document.getElementById('player-name');
const actionButton = document.getElementById('action-button'); 
const restartButton = document.getElementById('restart-button');
const adminButton = document.getElementById('admin-button');
const questionArea = document.getElementById('question-area');
const optionsContainer = document.getElementById('options-container');
const timeValueDisplay = document.getElementById('time-value');
const finalScoreInfo = document.getElementById('final-score-info');
const rankingTable = document.getElementById('high-scores');
const rankingStatus = document.getElementById('ranking-status');
const rewardMessage = document.getElementById('reward-message');

const adminInput = document.getElementById('admin-input');
const adminOutput = document.getElementById('admin-output');
const executeButton = document.getElementById('execute-button');
const resultsSummary = document.getElementById('results-summary'); 

// Elemento de notificação interna 
const internalNotification = document.createElement('div');
internalNotification.id = 'internal-notification';


// --- FUNÇÕES DE UTILIDADE ---

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function prepareQuizQuestions() {
    let shuffledQuestions = [...quizQuestions_ALL]; 
    shuffleArray(shuffledQuestions);
    currentQuizSet = shuffledQuestions.slice(0, QUIZ_SIZE); 
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
    document.querySelectorAll('.modal-overlay').forEach(modal => modal.classList.remove('active'));

    document.getElementById(screenId).classList.add('active');
}

function showInternalNotification(message) {
    internalNotification.textContent = message;
    internalNotification.classList.add('show');
    setTimeout(() => {
        internalNotification.classList.remove('show');
    }, 2000); 
}

// --- FUNÇÕES DE QUIZ ---

function startQuiz() {
    // 1. Validação do Nome
    playerName = playerNameInput.value.trim().substring(0, MAX_NAME_LENGTH);
    if (playerName === '') {
        alert("Por favor, coloque um nome antes"); 
        playerNameInput.focus();
        return;
    }
    
    // 2. Validação de Nome Duplicado
    const existingScores = getScores();
    if (existingScores.some(score => score.name.toLowerCase() === playerName.toLowerCase())) {
        alert(`O nome "${playerName}" já está no ranking. Por favor, escolha um nome diferente.`);
        playerNameInput.focus();
        return;
    }
    
    // 3. Preparação do Quiz
    prepareQuizQuestions();

    // 4. Inicialização
    currentQuestionIndex = 0;
    score = 0;
    totalTimeMs = 0;
    totalErrors = 0;
    quizResults = []; 

    // Inicia o cronômetro
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 10);
    
    document.getElementById('player-display').textContent = `Jogador: ${playerName}`;
    loadQuestion();
    showScreen('quiz-area');
}

function updateTimer() {
    const elapsed = Date.now() - startTime;
    totalTimeMs = elapsed;
    const timeFormatted = (elapsed / 1000).toFixed(3).replace('.', ','); 
    timeValueDisplay.textContent = `${timeFormatted}s`;
}

function stopTimer() {
    clearInterval(timerInterval);
}

function loadQuestion() {
    if (currentQuestionIndex >= currentQuizSet.length) {
        finishQuiz();
        return;
    }

    const questionData = currentQuizSet[currentQuestionIndex];
    // Removendo o uso do asterisco para negrito
    questionArea.innerHTML = `<span style="font-weight: bold;">Questão ${currentQuestionIndex + 1}/${QUIZ_SIZE}:</span> ${questionData.question}`;
    optionsContainer.innerHTML = '';
    
    // Reinicia o estado da resposta
    selectedAnswer = null;
    isAnswerConfirmed = false; 
    actionButton.classList.add('disabled');
    actionButton.textContent = 'Confirmar';
    actionButton.onclick = confirmAnswer; 

    // Embaralha as opções
    let shuffledOptions = [...questionData.options];
    shuffleArray(shuffledOptions);

    shuffledOptions.forEach((option) => {
        const button = document.createElement('button');
        button.className = 'btn option-btn';
        button.textContent = option.text;
        button.dataset.isCorrect = option.isCorrect; 
        button.onclick = () => selectOption(button);
        optionsContainer.appendChild(button);
    });
}

function selectOption(selectedButton) {
    if (isAnswerConfirmed) return;
    
    document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
    
    selectedButton.classList.add('selected');
    
    selectedAnswer = selectedButton;
    
    actionButton.classList.remove('disabled');
    actionButton.onclick = confirmAnswer; 
}

function confirmAnswer() {
    if (!selectedAnswer) {
        showInternalNotification("Por favor, selecione uma resposta antes de confirmar.");
        return;
    }
    
    isAnswerConfirmed = true;

    // Desabilita as opções e remove a interação
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.onclick = null;
        btn.classList.add('disabled');
        btn.classList.remove('selected'); 
    });

    const isCorrect = selectedAnswer.dataset.isCorrect === 'true';
    const currentQuestion = currentQuizSet[currentQuestionIndex];
    
    if (isCorrect) {
        score += POINTS_PER_QUESTION;
        selectedAnswer.classList.add('correct');
    } else {
        totalErrors++;
        selectedAnswer.classList.add('incorrect');
        
        // Realça a resposta correta
        Array.from(optionsContainer.children).forEach(btn => {
            if (btn.dataset.isCorrect === 'true') {
                btn.classList.add('correct');
            }
        });
    }

    // Registra o resultado para o resumo final
    quizResults.push({
        question: currentQuestion.question,
        answeredCorrectly: isCorrect,
        correctAnswerText: currentQuestion.options.find(opt => opt.isCorrect).text,
        chosenAnswerText: selectedAnswer.textContent
    });

    // Altera o botão para avançar
    actionButton.onclick = nextQuestion;
    actionButton.classList.remove('disabled'); 
    
    if (currentQuestionIndex === currentQuizSet.length - 1) {
        actionButton.textContent = 'Ver Resultado Final';
    } else {
        actionButton.textContent = 'Próxima Pergunta';
    }
}

function nextQuestion() {
    if (!isAnswerConfirmed) {
         showInternalNotification("Confirme sua resposta antes de avançar.");
         return; 
    }
    currentQuestionIndex++;
    loadQuestion();
}

function finishQuiz() {
    stopTimer();
    
    const finalScore = Math.round(score);
    const timeFormatted = (totalTimeMs / 1000).toFixed(3).replace('.', ',');

    document.getElementById('final-score').textContent = finalScore;
    document.getElementById('final-time').textContent = `${timeFormatted}s`;
    document.getElementById('final-errors').textContent = totalErrors;
    // Removendo o asterisco para negrito
    finalScoreInfo.innerHTML = `Parabéns, <span style="font-weight: bold;">${playerName}</span>!`;

    // Lógica de Recompensa
    let rewardText = '';
    let rewardClass = '';

    if (finalScore >= 65) {
        // Removendo o asterisco para negrito
        rewardText = 'Excelente! Você ganhou um <span style="font-weight: bold;">BOMBOM</span> (exceto se for muito novo, é claro)! 🍫';
        rewardClass = 'bombom';
    } else if (finalScore >= 40) {
        rewardText = "A Média! Seu conhecimento está sólido. Continue estudando! 👍";
        rewardClass = 'media';
    } else if (finalScore >= 20) {
        rewardText = "Estude mais! Há muito a aprender sobre reciclagem. 📚";
        rewardClass = 'estude';
    } else {
        rewardText = "Bem... espero que tenha se esforçado. O caminho da sustentabilidade é longo. 🌱";
        rewardClass = 'esforco';
    }

    rewardMessage.innerHTML = rewardText;
    rewardMessage.className = `reward-box ${rewardClass}`;

    displayResultsSummary();

    saveScore(finalScore, totalTimeMs);
    showScreen('result-screen');
}

function displayResultsSummary() {
    const summaryElement = document.getElementById('results-summary'); 
    if (!summaryElement) return;

    let html = '<h3>Detalhes das Respostas:</h3>';
    html += '<ul class="results-list">';

    quizResults.forEach((result, index) => {
        const icon = result.answeredCorrectly ? '✅' : '❌';
        const statusClass = result.answeredCorrectly ? 'correct-status' : 'incorrect-status';
        
        html += `<li class="${statusClass}">
            <span style="font-weight: bold;">${icon} Q${index + 1}:</span> ${result.question}
            <div class="answer-info">
                ${result.answeredCorrectly ? 
                    `Sua Resposta: <span>${result.chosenAnswerText}</span>` : 
                    `Você escolheu: <span class="chosen-wrong">${result.chosenAnswerText}</span> | Correto: <span class="chosen-correct">${result.correctAnswerText}</span>`}
            </div>
        </li>`;
    });

    html += '</ul>';
    summaryElement.innerHTML = html;
}


// --- FUNÇÕES DE RANKING (PLACAR) ---

function getScores() {
    const scores = localStorage.getItem('quizScores');
    return scores ? JSON.parse(scores) : [];
}

function saveScore(score, time) {
    let scores = getScores();
    const normalizedScore = Math.round(score);

    scores.push({
        name: playerName,
        score: normalizedScore,
        time: time,
        date: new Date().toLocaleString()
    });

    scores.sort((a, b) => {
        if (b.score !== a.score) {
            return b.score - a.score;
        }
        return a.time - b.time;
    });

    scores = scores.slice(0, 10);
    
    localStorage.setItem('quizScores', JSON.stringify(scores));
    displayScores();
}

function displayScores() {
    const scores = getScores();
    rankingTable.innerHTML = '';
    
    if (scores.length === 0) {
        rankingStatus.textContent = 'Nenhum jogador ainda. Seja o primeiro!';
        rankingTable.style.display = 'none';
        return;
    }

    rankingTable.style.display = 'table';
    rankingStatus.textContent = '';
    
    let tableHTML = '<thead><tr><th>Pos.</th><th>Nome</th><th>Pontos</th><th>Tempo (s)</th></tr></thead><tbody>';

    scores.forEach((entry, index) => {
        const timeFormatted = (entry.time / 1000).toFixed(3).replace('.', ',');
        tableHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${entry.name}</td>
                <td>${entry.score}</td>
                <td>${timeFormatted}</td>
            </tr>
        `;
    });

    tableHTML += '</tbody>';
    rankingTable.innerHTML = tableHTML;
}

// --- FUNÇÕES DO PAINEL DE ADMINISTRAÇÃO (ACESSO DIRETO) ---

function openAdminPanel() {
    adminOutput.textContent = 'Painel aberto. Digite um comando...';
    adminInput.value = '';
    adminPanel.classList.add('active');
    adminInput.focus();
}

function closeAdminPanel() {
    adminPanel.classList.remove('active');
}

function executeCommand() {
    const command = adminInput.value.trim().toLowerCase();
    adminInput.value = '';
    let output = '';

    switch(command) {
        case '@reset':
            localStorage.removeItem('quizScores');
            displayScores();
            output = '✅ Ranking e placares zerados com sucesso.';
            break;
        // O comando @msg foi removido daqui
        case '':
            output = 'Digite um comando.';
            break;
        default:
            output = `❌ Comando não reconhecido: ${command}. Comandos válidos: @reset`;
            break;
    }
    
    adminOutput.textContent = `> ${command}\n${output}`;
}

// A função openFullscreenMessage não é mais usada, mas mantive closeFullscreenMessage para limpar o modal
function closeFullscreenMessage() {
    document.getElementById('fullscreen-message').classList.remove('active');
}


// --- INICIALIZAÇÃO ---

// Event Listeners
startButton.addEventListener('click', startQuiz);
restartButton.addEventListener('click', () => showScreen('start-screen'));
adminButton.addEventListener('click', openAdminPanel); 
executeButton.addEventListener('click', executeCommand);


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('quiz-area').prepend(internalNotification);
    
    displayScores();
    showScreen('start-screen');
});