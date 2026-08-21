/* =====================================================
   NOTES DATABASE
   ===================================================== */

const notesData = [

    {
        course: "BSc",
        subject: "Botany",
        title: "Plant Cell",
        description:
            "Structure and functions of important plant cell organelles.",
        icon: "🌱"
    },

    {
        course: "BSc",
        subject: "Chemistry",
        title: "Atomic Structure",
        description:
            "Basic concepts of atoms, electrons, orbitals and atomic models.",
        icon: "⚛️"
    },

    {
        course: "BSc",
        subject: "Zoology",
        title: "Animal Tissues",
        description:
            "Introduction to epithelial, connective, muscular and nervous tissues.",
        icon: "🧬"
    },

    {
        course: "BA",
        subject: "History",
        title: "Modern Indian History",
        description:
            "Important concepts and events for history revision.",
        icon: "🏛️"
    },

    {
        course: "BA",
        subject: "Political Science",
        title: "Indian Constitution",
        description:
            "Basic concepts related to the Indian Constitution.",
        icon: "⚖️"
    },

    {
        course: "BA",
        subject: "English",
        title: "English Literature",
        description:
            "Literary concepts, authors and important examination points.",
        icon: "📖"
    },

    {
        course: "BCom",
        subject: "Accounting",
        title: "Financial Accounting",
        description:
            "Fundamental accounting concepts and revision material.",
        icon: "💰"
    },

    {
        course: "BCom",
        subject: "Economics",
        title: "Demand and Supply",
        description:
            "Important concepts, laws and examples.",
        icon: "📈"
    },

    {
        course: "MSc",
        subject: "Research",
        title: "Research Methodology",
        description:
            "Important concepts for postgraduate academic research.",
        icon: "🔬"
    },

    {
        course: "MCom",
        subject: "Management",
        title: "Financial Management",
        description:
            "Core concepts and revision points.",
        icon: "📊"
    },

    {
        course: "MA",
        subject: "English",
        title: "Literary Criticism",
        description:
            "Important concepts for postgraduate literature studies.",
        icon: "📚"
    }

];


function renderNotes() {

    const grid =
        document.getElementById("notesGrid");

    const search =
        document
            .getElementById("noteSearch")
            .value
            .toLowerCase()
            .trim();

    const course =
        document
            .getElementById("noteCourse")
            .value;


    grid.innerHTML = "";


    const filtered =
        notesData.filter(note => {

            const matchesSearch =
                note.title
                    .toLowerCase()
                    .includes(search) ||

                note.subject
                    .toLowerCase()
                    .includes(search) ||

                note.description
                    .toLowerCase()
                    .includes(search);


            const matchesCourse =
                course === "all" ||
                note.course === course;


            return (
                matchesSearch &&
                matchesCourse
            );

        });


    filtered.forEach(note => {

        const card =
            document.createElement("div");

        card.className =
            "note-card";


        card.innerHTML = `

            <div class="note-icon">
                ${note.icon}
            </div>

            <h3>
                ${note.title}
            </h3>

            <p>
                ${note.description}
            </p>

            <small>
                ${note.course} • ${note.subject}
            </small>

        `;


        grid.appendChild(card);

    });


    if (!filtered.length) {

        grid.innerHTML = `

            <div class="note-card">

                <h3>
                    No notes found
                </h3>

                <p>
                    Try another search.
                </p>

            </div>

        `;

    }

}


document.addEventListener(
    "DOMContentLoaded",
    function() {

        renderNotes();

        document
            .getElementById("noteSearch")
            .addEventListener(
                "input",
                renderNotes
            );

        document
            .getElementById("noteCourse")
            .addEventListener(
                "change",
                renderNotes
            );

    }
);
