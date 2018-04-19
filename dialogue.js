// Set up the process of hitting Enter to talk to Alexa.
function submitOnEnter() {
    var inputBox = document.getElementById("dialog-box");
    inputBox.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13 && inputBox.value != "") {
            ask();
        }
    });
}

async function ask() {
    var message = document.getElementById("dialog-box").value;
    document.getElementById("dialog-box").value = "";
    userSay(message);

    askQuestion(message);
}

function userSay(message) {
    // Create the message box.
    var messageBox = document.createElement("div");
    messageBox.innerHTML = message;
    messageBox.className = "message-box user-message-box";

    // Put message box container in the page.
    document.getElementById("chat-box").appendChild(messageBox);
    scrollToBottom();
}

function alexaSay(message) {
    // Create the message box.
    var messageBox = document.createElement("div");
    messageBox.innerHTML = message;
    messageBox.className = "message-box alexa-message-box";

    // Put message box container in the page.
    document.getElementById("chat-box").appendChild(messageBox);
    scrollToBottom();
}


function askQuestion(question) {
    var questions = [
        {
            phrasings: [
                "Hello",
                "Hello.",
            ],
            answer: "Hello.",
        },
        {
            phrasings: [
                "Is the cafeteria open?",
                "Is the cafeteria open right now?",
                "Is the cafeteria currently open?",
            ],
            answer: "The cafeteria is currently open for lunch.",
        },
        {
            phrasings: [
                "When does the cafeteria close?",
                "What does the cafeteria stop serving food?",
                "When does serving stop?",
            ],
            answer: "Breakfast ends at 9:00, lunch ends at 2:00 and dinner ends at 7:00.",
        },
        {
            phrasings: [
                "When is the cafeteria open?",
                "What time is the cafeteria open?",
                "What are the cafeteria's hours?",
            ],
            answer: "The cafeteria is open for breakfast from 7:30 to 9:00, lunch from 11:00 to 2:00, and dinner from 5:00 to 7:00.",
        },
        {
            phrasings: [
                "What types of food do you serve?",
                "What kinds of food do you have?",
                "What are the varieties of food offered at the cafeteria?",
            ],
            answer: "For breakfast we have waffles, cereal, oatmeal and coffee. For lunch we offer sandwiches, salads, sides and ice cream. For dinner we serve entrees, appetizers, a salad bar and a wide variety of disserts.",
        },
        {
            phrasings: [
                "What payment methods does the cafeteria accept?"
                "What payment methods do you accept?",
                "How can I pay for my meal?",
            ],
            answer: "We accept cash, credit or debit cards, and meal plans.",
        },
        {
            phrasings: [
                "What is the library's phone number?",
                "What is the phone number for the library?",
                "How do I call the library?",
            ],
            answer: "You can reach the library at 412-367-9300.",
        },
        {
            phrasings: [
                "What is the library's email?",
                "What is the library's email address?",
                "What is the email address for the library?",
            ],
            answer: "You can email the library at library@laroche.edu.",
        },
        {
            phrasings: [
                "When is the library open?",
                "What are the open and closing times of the library?",
                "What are the hours for the library?",
            ],
            answer: "The library is open Monday through Friday from 9:00 to 6:00, and on Saturday from 9:00-4:00.",
        },
        {
            phrasings: [
                "What services does the library offer?",
                "What can I do at the library?",
                "Apart from borrowing materials, what other services are offered in the library?",
            ],
            answer: "The library provides a quiet place to read or study, a computer lab, a help desk, and a media room.",
        },
        {
            phrasings: [
                "What can I borrow from the library other than books?",
                "Apart from books, what other items can I borrow from the library?",
                "What can I borrow from the library?",
            ],
            answer: "We don't just offer books! You can also borrow periodicals and DVDs.",
        },
        {
            phrasings: [
                "When are borrowed materials due?",
                "When do you have to return books?",
                "How long can you borrow things for?",
            ],
            answer: "Books are due after three weeks. Magazines and movies are due in one week.",
        }
    ];

    lowerQuestion = question.toLowerCase();

    var matched = 0;
    for ( var i = 0; i < questions.length && matched == 0; i++ ) {
        for ( var j = 0; j < questions[i].phrasings.length && matched == 0; j++ ) {
            potentialQuestion = questions[i].phrasings[j].toLowerCase();
            if ( lowerQuestion == potentialQuestion ) {
                alexaSay(questions[i].answer);
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

// Make the chat box jump to the most recent message.
function scrollToBottom() {
    var chatBox = document.getElementById("chat-box");
    chatBox.scrollTop = chatBox.scrollHeight;
}

