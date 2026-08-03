const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");

function sendMessage() {

    let message = userInput.value.trim();

    if (message === "") return;

    chatBox.innerHTML += `
    <div class="user-message">
        <div class="message">${message}</div>
    </div>
    `;

    let text = message.toLowerCase();
    let reply = "";

    if (text.includes("hi") || text.includes("hello")) {
        reply = "👋 Hello! Welcome to Nova AI.";
    }
    else if (text.includes("how are you")) {
        reply = "😊 I'm doing great! Thanks for asking.";
    }
    else if (text.includes("who are you")) {
        reply = "🤖 I am Nova AI, your virtual assistant.";
    }
    else if (text.includes("ai")) {
        reply = "🧠 AI stands for Artificial Intelligence. It enables computers to perform tasks that normally require human intelligence.";
    }
    else if (text.includes("time")) {
        reply = "⏰ Current Time: " + new Date().toLocaleTimeString();
    }
    else if (text.includes("date")) {
        reply = "📅 Today's Date: " + new Date().toLocaleDateString();
    }
    else if (text.includes("quote")) {
        reply = "💡 'Success is the sum of small efforts repeated day in and day out.'";
    }
    else if (text.includes("joke")) {
        reply = "😂 Why do programmers prefer dark mode? Because light attracts bugs!";
    }
    else if (text.includes("thank")) {
        reply = "😊 You're welcome! Happy to help.";
    }
    else if (text.includes("bye")) {
        reply = "👋 Goodbye! Have a wonderful day.";
    }
    else {
        reply = "🤔 Sorry, I don't understand. Try asking about AI, Time, Date, Quote, or Joke.";
    }

    setTimeout(() => {
        chatBox.innerHTML += `
        <div class="bot-message">
            <div class="message">${reply}</div>
        </div>
        `;
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);

    userInput.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}

userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});