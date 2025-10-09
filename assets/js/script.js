

const chatButton = document.getElementById('chatButton');
const chatPopup = document.getElementById('chatPopup');
const closeChat = document.getElementById('closeChat');
const sendBtn = document.getElementById('sendBtn');
const chatBody = document.getElementById('chatBody');
const userInput = document.getElementById('userInput');
const inputArea = document.querySelector('.chat-input-area');

let stage = 0; 

// Função para criar mensagens
function createMessage(text, sender = 'bot') {
    const msg = document.createElement('div');
    msg.classList.add('message', sender);
    msg.textContent = text;
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
}


chatButton.addEventListener('click', () => {
    
    chatPopup.style.display = 'flex';
    chatButton.style.display = 'none';

    
    //chatBody.innerHTML = '';
    inputArea.style.display = 'none'; 
    if(stage == 0) {
    stage = 0;
    
    // Mensagens automáticas iniciais
    setTimeout(() => createMessage('Olá! Tudo bem?'), 500);
    setTimeout(() => createMessage('Bem-vindo ao nosso atendimento virtual!'), 1500);
    setTimeout(() => {
        createMessage('Antes de começarmos, qual é o seu nome?');
        stage = 1; 
        inputArea.style.display = 'flex'; 
    }, 2500); }
});

// Fechar chat
closeChat.addEventListener('click', () => {
    chatPopup.style.display = 'none';
    chatButton.style.display = 'flex';
});

// Enviar mensagem do usuário
sendBtn.addEventListener('click', () => {
    const text = userInput.value.trim();
    if (text === '') return;

    createMessage(text, 'user');
    userInput.value = '';
    inputArea.style.display = 'none';

    // Etapa 1: O bot espera o nome
    if (stage === 1) {
        setTimeout(() => {
            
            createMessage(`Prazer em te conhecer, ${text}! `);
            setTimeout(() => {
                createMessage('Como posso te ajudar hoje?');
            }, 1000);
        }, 800);
        stage = 2; // Passa para o próximo estágio
    } 
    
    // Etapa 2: Conversa normal
    else if (stage === 2) {
        setTimeout(() => {
            createMessage('Entendi! Me conte mais sobre isso.');
        }, 800);
    }
});

// Permitir Enter para enviar
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendBtn.click();
    }
});

