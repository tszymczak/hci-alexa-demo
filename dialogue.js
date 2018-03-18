async function userSpeak() {
    var message = document.getElementById("dialog-box").value;
    document.getElementById("dialog-box").value = "";
    var messageBox = document.createElement("div");
    messageBox.innerHTML = message;
    messageBox.className = "user-message-box";

    document.getElementById("chat-box").appendChild(messageBox);

    await sleep(1000);
    askQuestion(message);
}

function askQuestion(question) {
    lowerQuestion = question.toLowerCase();
    if (lowerQuestion == "is the cafeteria open?") {
        alexaSpeak("Yes. The cafteria is currently open for lunch.");
    } else if (lowerQuestion == "when is the cafeteria open?") {
        alexaSpeak("The cafeteria is open for breakfast from 7:30 to 9:00, lunch from 11:00 to 2:00, and dinner from 5:00 to 7:00.");
    } else {
        alexaSpeak("Sorry, I don't recognize that.");
    }
}

function alexaSpeak(message) {
    var messageBox = document.createElement("div");
    messageBox.innerHTML = message;
    messageBox.className = "alexa-message-box";

    document.getElementById("chat-box").appendChild(messageBox);
}

/* Pause execution for time ms. See
https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
for details. */ 
function sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
