/* =====================================================
   SRKP PERSONAL AI TUTOR
   ===================================================== */

const API_URL = "/api/ask";


/* ASK TUTOR */

async function askTutor() {

    const input = document.getElementById("question");

    const question = input.value.trim();

    if (!question) {
        alert("Please enter a question.");
        return;
    }

    const course =
        document.getElementById("course").value;

    const semester =
        document.getElementById("semester").value;

    const subject =
        document.getElementById("subject").value.trim();


    addMessage("user", question);

    input.value = "";

    const loading = addMessage(
        "tutor",
        "Thinking... 🤔"
    );


    try {

        const response = await fetch(API_URL, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({

                question: question,

                course: course,

                semester: semester,

                subject: subject

            })

        });


        const data = await response.json();


        if (!response.ok) {
            throw new Error(
                data.error || "Server error"
            );
        }


        loading.remove();

        addMessage(
            "tutor",
            data.answer || "I couldn't generate an answer."
        );


        show3DVisual(question);

    }

    catch (error) {

        loading.remove();

        addMessage(
            "tutor",
            "⚠️ " + error.message
        );

    }

}


/* ADD MESSAGE */

function addMessage(type, text) {

    const chat =
        document.getElementById("chatMessages");


    const message =
        document.createElement("div");


    message.className =
        type === "user"
        ? "message user-message"
        : "message tutor-message";


    const avatar =
        document.createElement("div");

    avatar.className =
        "message-avatar";

    avatar.textContent =
        type === "user"
        ? "👤"
        : "🤖";


    const body =
        document.createElement("div");

    body.className =
        "message-body";


    const name =
        document.createElement("strong");

    name.textContent =
        type === "user"
        ? "You"
        : "SRKP Personal Tutor";


    const paragraph =
        document.createElement("p");


    /*
       Convert basic line breaks safely.
    */

    paragraph.textContent = text;


    body.appendChild(name);

    body.appendChild(paragraph);

    message.appendChild(avatar);

    message.appendChild(body);

    chat.appendChild(message);


    chat.scrollTop =
        chat.scrollHeight;


    return message;

}


/* QUICK QUESTION */

function quickAsk(text) {

    const input =
        document.getElementById("question");

    input.value = text;

    input.focus();

}


/* CLEAR CHAT */

function clearChat() {

    const chat =
        document.getElementById("chatMessages");

    chat.innerHTML = `

        <div class="message tutor-message">

            <div class="message-avatar">
                🤖
            </div>

            <div class="message-body">

                <strong>SRKP Personal Tutor</strong>

                <p>
                    New chat started. 👋
                </p>

                <p>
                    Ask me anything about your studies.
                </p>

            </div>

        </div>

    `;

}


/* KEYBOARD */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const input =
            document.getElementById("question");


        if (!input) return;


        input.addEventListener(
            "keydown",
            function(event) {

                if (
                    event.key === "Enter" &&
                    !event.shiftKey
                ) {

                    event.preventDefault();

                    askTutor();

                }

            }
        );

    }
);


/* VOICE INPUT */

function startVoiceInput() {

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;


    if (!SpeechRecognition) {

        alert(
            "Voice input is not supported in this browser."
        );

        return;

    }


    const recognition =
        new SpeechRecognition();


    recognition.lang = "en-IN";

    recognition.interimResults = false;

    recognition.start();


    recognition.onresult =
        function(event) {

            const text =
                event.results[0][0].transcript;


            document.getElementById(
                "question"
            ).value = text;

        };

}


/* SIMPLE 3D VISUAL */

function show3DVisual(question) {

    const container =
        document.getElementById(
            "threeContainer"
        );


    if (!container) return;


    container.innerHTML = `

        <div class="visual-placeholder">

            <div class="visual-icon">
                🧠
            </div>

            <h3>
                Visual Learning Mode
            </h3>

            <p>
                Topic: ${escapeHTML(question)}
            </p>

        </div>

    `;

}


/* HTML ESCAPE */

function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}
