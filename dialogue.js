function userSpeak() {
    var message = document.getElementById("dialog-box").value;
    document.getElementById("dialog-box").value = "";
    var messageBox = document.createElement("div");
    messageBox.innerHTML = message;
    messageBox.className = "user-message-box";

    document.getElementById("chat-box").appendChild(messageBox);

    alexaSpeak("I'm Alexa");
}

function alexaSpeak(message) {
    var messageBox = document.createElement("div");
    messageBox.innerHTML = message;
    messageBox.className = "alexa-message-box";

    document.getElementById("chat-box").appendChild(messageBox);
}
