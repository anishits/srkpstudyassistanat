/* =========================================
   SRKP AI STUDY ASSISTANT
   Made by Anish Jodhawat
   ========================================= */


/* ---------- THEME ---------- */

function toggleTheme() {
  document.body.classList.toggle("light");

  const button = document.querySelector(".theme-btn");

  if (document.body.classList.contains("light")) {
    button.innerHTML = "☀";
  } else {
    button.innerHTML = "☾";
  }
}


/* ---------- SCROLL TO AI ---------- */

function scrollToAI() {
  document.getElementById("ai").scrollIntoView({
    behavior: "smooth"
  });
}


/* ---------- FEATURE MODAL ---------- */

function showFeatures() {
  openFeature("SRKP AI Features");
}

function openFeature(feature) {

  const modal = document.getElementById("modal");
  const title = document.getElementById("modalTitle");
  const text = document.getElementById("modalText");

  title.innerText = feature;

  const descriptions = {

    "SRKP AI Features":
      "SRKP AI Study Assistant provides AI explanations, smart notes, MCQs, study planning, previous papers and interactive learning tools for college students.",

    "Notes":
      "Your future Notes Library can contain semester-wise, subject-wise and unit-wise notes.",

    "Previous Papers":
      "Add previous-year examination papers here and organize them by course, semester and subject.",

    "Important Questions":
      "Save and organize important examination questions for quick revision."

  };

  text.innerText =
    descriptions[feature] ||
    "This feature can be connected to your student database later.";

  modal.classList.add("show");
}

function closeModal() {
  document.getElementById("modal").classList.remove("show");
}

window.onclick = function(event) {

  const modal = document.getElementById("modal");

  if (event.target === modal) {
    closeModal();
  }

};


/* =========================================
   AI TUTOR
   ========================================= */

function askAI() {

  const question =
    document.getElementById("question").value.trim();

  const subject =
    document.getElementById("subject").value;

  const answer =
    document.getElementById("answer");

  const status =
    document.getElementById("status");

  if (!question) {

    answer.innerHTML = `
      <div class="empty-ai">
        <div class="big-robot">⚠️</div>
        <h3>Please enter a question</h3>
        <p>Type a question to get an explanation.</p>
      </div>
    `;

    return;
  }

  status.innerText = "Thinking...";

  answer.innerHTML = `
    <div class="empty-ai">
      <div class="big-robot">🤖</div>
      <h3>AI is preparing your explanation...</h3>
    </div>
  `;


  setTimeout(() => {

    status.innerText = "Completed";

    answer.innerHTML = `

      <h2>📚 ${subject} Explanation</h2>

      <p>
        <strong>Your Question:</strong>
        ${escapeHTML(question)}
      </p>

      <br>

      <h3>💡 Easy Explanation</h3>

      <p>
        This is a demo AI response. The website is ready
        to connect with a real AI API in the future.
      </p>

      <p>
        To understand this topic easily, first identify
        the main concept, then learn its definition,
        working principle and finally practice examples.
      </p>

      <h3>⭐ Key Points</h3>

      <ul>
        <li>Understand the basic definition.</li>
        <li>Learn the main principle.</li>
        <li>Remember important formulas or terms.</li>
        <li>Practice examination questions.</li>
      </ul>

      <br>

      <div class="creator-card">
        🤖
        <div>
          <small>SRKP AI Study Assistant</small>
          <strong>Made by Anish Jodhawat</strong>
        </div>
      </div>

    `;

  }, 1200);

}


/* Security helper */

function escapeHTML(text) {

  const div = document.createElement("div");

  div.textContent = text;

  return div.innerHTML;

}


/* =========================================
   3D PENDULUM
   ========================================= */

let pendulumRunning = true;

function togglePendulum() {

  const rope =
    document.querySelector(".rope");

  pendulumRunning = !pendulumRunning;

  if (pendulumRunning) {

    rope.style.animationPlayState = "running";

  } else {

    rope.style.animationPlayState = "paused";

  }

}


/* =========================================
   MCQ SYSTEM
   ========================================= */

const mcqs = [

  {
    question:
      "Which law explains that every action has an equal and opposite reaction?",

    options: [
      "Newton's First Law",
      "Newton's Second Law",
      "Newton's Third Law",
      "Law of Gravitation"
    ],

    answer: 2
  },

  {
    question:
      "Which organelle is known as the powerhouse of the cell?",

    options: [
      "Nucleus",
      "Mitochondria",
      "Ribosome",
      "Golgi body"
    ],

    answer: 1
  },

  {
    question:
      "What is the SI unit of force?",

    options: [
      "Joule",
      "Watt",
      "Newton",
      "Pascal"
    ],

    answer: 2
  },

  {
    question:
      "Which gas is most abundant in Earth's atmosphere?",

    options: [
      "Oxygen",
      "Nitrogen",
      "Carbon dioxide",
      "Hydrogen"
    ],

    answer: 1
  }

];

let currentMCQ = null;

function generateMCQ() {

  currentMCQ =
    mcqs[Math.floor(Math.random() * mcqs.length)];

  document.getElementById("mcqQuestion")
    .innerText = currentMCQ.question;

  const options =
    document.getElementById("options");

  options.innerHTML = "";

  document.getElementById("mcqResult")
    .innerText = "";

  currentMCQ.options.forEach((option, index) => {

    const div = document.createElement("div");

    div.className = "option";

    div.innerText =
      `${String.fromCharCode(65 + index)}. ${option}`;

    div.onclick = () =>
      checkMCQ(index, div);

    options.appendChild(div);

  });

}

function checkMCQ(index, element) {

  if (!currentMCQ) return;

  const result =
    document.getElementById("mcqResult");

  if (index === currentMCQ.answer) {

    element.classList.add("correct");

    result.innerText =
      "🎉 Correct answer!";

  } else {

    element.classList.add("wrong");

    result.innerText =
      `❌ Incorrect. Correct answer: ${
        currentMCQ.options[currentMCQ.answer]
      }`;

  }

}


/* =========================================
   STUDY PLANNER
   ========================================= */

function addTask() {

  const input =
    document.getElementById("taskInput");

  const time =
    document.getElementById("timeInput");

  const list =
    document.getElementById("taskList");

  const task =
    input.value.trim();

  if (!task) return;

  const item =
    document.createElement("div");

  item.className = "task";

  item.innerHTML = `

    <span>
      📚 ${escapeHTML(task)}
    </span>

    <span>
      ⏱ ${time.value}
    </span>

  `;

  list.appendChild(item);

  input.value = "";

}


/* =========================================
   KEYBOARD SHORTCUT
   ========================================= */

document.addEventListener("keydown", function(event) {

  if (event.ctrlKey && event.key === "Enter") {
    askAI();
  }

});


/* =========================================
   3D MOUSE PARALLAX
   ========================================= */

const heroVisual =
  document.querySelector(".hero-visual");

document.addEventListener("mousemove", function(e) {

  if (!heroVisual) return;

  const x =
    (window.innerWidth / 2 - e.clientX) / 40;

  const y =
    (window.innerHeight / 2 - e.clientY) / 40;

  heroVisual.style.transform =
    `rotateY(${x}deg) rotateX(${y}deg)`;

});


/* =========================================
   WELCOME MESSAGE
   ========================================= */

window.addEventListener("load", function() {

  console.log(
    "SRKP AI Study Assistant loaded successfully."
  );

  console.log(
    "Made with ❤️ by Anish Jodhawat"
  );

});
