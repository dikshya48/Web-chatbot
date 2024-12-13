const sendBtn = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');

sendBtn.addEventListener('click', () => {
    const userMessage = userInput.value.trim();
    if (userMessage) {
        appendMessage(userMessage, 'user-message');
        userInput.value = '';
        setTimeout(() => {
            appendMessage(generateBotResponse(userMessage), 'bot-message');
        }, 1000);
    }
});

function appendMessage(message, className) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.className = className;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function generateBotResponse(userMessage) {
    const responses = {
        'hello': 'Hi there! How can I assist you today?',
        'hi': 'Hi there! How can I assist you today?',
        'how are you': 'I am just a bot, but I am functioning as expected!',
        'bye': 'Goodbye! Have a great day!',
        'what is your name?': 'I am a chatbot created to assist you!',
        'tell me a joke': 'Why don’t skeletons fight each other? They don’t have the guts!',
        'what is the weather like?': 'I am not sure about the weather right now. Please check your local weather app!',
        'how does a chatbot work?': 'The chatbot uses predefined rules to understand and respond to user inputs.',
        'tell me a fun fact': 'Did you know that honey never spoils? Archaeologists have found pots of honey in ancient tombs that are over 3,000 years old!'
    };
    
    return responses[userMessage.toLowerCase()] || "I'm not sure how to respond to that.";
}
