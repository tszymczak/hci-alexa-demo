async function ask() {
    var message = document.getElementById("dialog-box").value;
    document.getElementById("dialog-box").value = "";
    userSay(message)

    askQuestion(message);
}

function userSay(message) {
    // Create the message box.
    var messageBox = document.createElement("div");
    messageBox.innerHTML = message;
    messageBox.className = "message-box user-message-box";

    // Put message box container in the page.
    document.getElementById("chat-box").appendChild(messageBox);
}

function alexaSay(message) {
    // Create the message box.
    var messageBox = document.createElement("div");
    messageBox.innerHTML = message;
    messageBox.className = "message-box alexa-message-box";

    // Put message box container in the page.
    document.getElementById("chat-box").appendChild(messageBox);
}


function askQuestion(question) {
    var questions = [
        {
            answer: "The cafeteria is currently open for lunch.",
            phrasings: [
                "is the cafeteria open?",
                "is the cafeteria open right now?",
            ]
        },
        {
            answer: "The cafeteria is open for breakfast from 7:30 to 9:00, lunch from 11:00 to 2:00, and dinner from 5:00 to 7:00.",
            phrasings: [
                "when is the cafeteria open?",
                "what time is the cafeteria open?",
                "what are the cafeteria's hours?",
            ]
        }
    ]

    lowerQuestion = question.toLowerCase();

    var matched = 0;
    for ( var i = 0; i < questions.length && matched == 0; i++ ) {
        for ( var j = 0; j < questions[i].phrasings.length && matched == 0; j++ ) {
            potentialQuestion = questions[i].phrasings[j];
            if ( lowerQuestion == potentialQuestion ) {
                alexaSpeak(questions[i].answer);
                matched = 1;
            }
        }
    }

    if (matched == 0) {
        alexaSay("Sorry, I don't understand that.");
    }
}

/* Pause execution for time ms. See
https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
for details. */ 
function sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function test() {
    userSay("Hello");
    alexaSay("Hello");
    userSay("What time is the cafeteria open?");
    alexaSay("The cafeteria is open for breakfast from 7:30 to 9:00, lunch from 11:00 to 2:00, and dinner from 5:00 to 7:00.");
}
