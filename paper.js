/* =====================================================
   SRKP AI STUDY ASSISTANT
   PAPERS JAVASCRIPT
   Designed & Developed by Anish Jodhawat
   ===================================================== */


/*
    =====================================================
    PAPER DATABASE
    =====================================================

    IMPORTANT:

    The entries below are DEMO / PRACTICE entries.

    When you get the actual PDF files, change:

        pdf: ""

    to something like:

        pdf: "papers/bsc/semester-2/botany.pdf"

    Do not label a paper "official previous year"
    unless you have verified the source.
*/


const papersData = [

    /* =========================
       BA
       ========================= */

    {
        id: 1,
        course: "BA",
        semester: "Semester 1",
        subject: "English",
        title: "BA English Practice Paper",
        year: "Practice",
        type: "Practice",
        pdf: ""
    },

    {
        id: 2,
        course: "BA",
        semester: "Semester 2",
        subject: "History",
        title: "BA History Model Paper",
        year: "Model",
        type: "Model",
        pdf: ""
    },

    {
        id: 3,
        course: "BA",
        semester: "Semester 2",
        subject: "Political Science",
        title: "Political Science Practice Paper",
        year: "Practice",
        type: "Practice",
        pdf: ""
    },


    /* =========================
       BSc
       ========================= */

    {
        id: 4,
        course: "BSc",
        semester: "Semester 1",
        subject: "Botany",
        title: "BSc Botany Practice Paper",
        year: "Practice",
        type: "Practice",
        pdf: ""
    },

    {
        id: 5,
        course: "BSc",
        semester: "Semester 2",
        subject: "Chemistry",
        title: "BSc Chemistry Practice Paper",
        year: "Practice",
        type: "Practice",
        pdf: ""
    },

    {
        id: 6,
        course: "BSc",
        semester: "Semester 2",
        subject: "Zoology",
        title: "BSc Zoology Model Paper",
        year: "Model",
        type: "Model",
        pdf: ""
    },

    {
        id: 7,
        course: "BSc",
        semester: "Semester 3",
        subject: "Physics",
        title: "BSc Physics Practice Paper",
        year: "Practice",
        type: "Practice",
        pdf: ""
    },


    /* =========================
       BCOM
       ========================= */

    {
        id: 8,
        course: "BCom",
        semester: "Semester 1",
        subject: "Accounting",
        title: "Financial Accounting Practice Paper",
        year: "Practice",
        type: "Practice",
        pdf: ""
    },

    {
        id: 9,
        course: "BCom",
        semester: "Semester 2",
        subject: "Economics",
        title: "Business Economics Model Paper",
        year: "Model",
        type: "Model",
        pdf: ""
    },

    {
        id: 10,
        course: "BCom",
        semester: "Semester 3",
        subject: "Business Law",
        title: "Business Law Practice Paper",
        year: "Practice",
        type: "Practice",
        pdf: ""
    },


    /* =========================
       MA
       ========================= */

    {
        id: 11,
        course: "MA",
        semester: "Semester 1",
        subject: "English",
        title: "MA English Practice Paper",
        year: "Practice",
        type: "Practice",
        pdf: ""
    },

    {
        id: 12,
        course: "MA",
        semester: "Semester 2",
        subject: "History",
        title: "MA History Model Paper",
        year: "Model",
        type: "Model",
        pdf: ""
    },


    /* =========================
       MSc
       ========================= */

    {
        id: 13,
        course: "MSc",
        semester: "Semester 1",
        subject: "Chemistry",
        title: "MSc Chemistry Practice Paper",
        year: "Practice",
        type: "Practice",
        pdf: ""
    },

    {
        id: 14,
        course: "MSc",
        semester: "Semester 2",
        subject: "Botany",
        title: "MSc Botany Model Paper",
        year: "Model",
        type: "Model",
        pdf: ""
    },


    /* =========================
       MCOM
       ========================= */

    {
        id: 15,
        course: "MCom",
        semester: "Semester 1",
        subject: "Accounting",
        title: "MCom Advanced Accounting Paper",
        year: "Practice",
        type: "Practice",
        pdf: ""
    },

    {
        id: 16,
        course: "MCom",
        semester: "Semester 2",
        subject: "Financial Management",
        title: "Financial Management Model Paper",
        year: "Model",
        type: "Model",
        pdf: ""
    }

];



/* =====================================================
   GET ELEMENTS
   ===================================================== */

const paperList =
    document.getElementById("paperList");

const paperSearch =
    document.getElementById("paperSearch");

const paperCourse =
    document.getElementById("paperCourse");

const paperSemester =
    document.getElementById("paperSemester");

const paperType =
    document.getElementById("paperType");

const resultCount =
    document.getElementById("resultCount");



/* =====================================================
   RENDER PAPERS
   ===================================================== */

function renderPapers() {

    if (!paperList) {
        return;
    }


    const search =
        paperSearch.value
            .toLowerCase()
            .trim();


    const course =
        paperCourse.value;


    const semester =
        paperSemester.value;


    const type =
        paperType.value;


    const filteredPapers =
        papersData.filter(paper => {


            const matchesSearch =

                paper.title
                    .toLowerCase()
                    .includes(search)

                ||

                paper.subject
                    .toLowerCase()
                    .includes(search)

                ||

                paper.course
                    .toLowerCase()
                    .includes(search)

                ||

                paper.year
                    .toLowerCase()
                    .includes(search);


            const matchesCourse =

                course === "all"

                ||

                paper.course === course;


            const matchesSemester =

                semester === "all"

                ||

                paper.semester === semester;


            const matchesType =

                type === "all"

                ||

                paper.type === type;


            return (

                matchesSearch &&

                matchesCourse &&

                matchesSemester &&

                matchesType

            );

        });


    resultCount.textContent =

        `${filteredPapers.length} paper` +

        `${filteredPapers.length === 1 ? "" : "s"} found`;


    paperList.innerHTML = "";


    if (filteredPapers.length === 0) {

        showEmptyState();

        return;

    }


    filteredPapers.forEach(paper => {

        paperList.appendChild(
            createPaperCard(paper)
        );

    });

}



/* =====================================================
   CREATE PAPER CARD
   ===================================================== */

function createPaperCard(paper) {

    const card =
        document.createElement("article");


    card.className =
        "paper-card";


    card.innerHTML = `

        <div class="paper-top">

            <div class="paper-icon">
                📄
            </div>

            <span class="paper-year">
                ${escapeHTML(paper.year)}
            </span>

        </div>


        <h3>
            ${escapeHTML(paper.title)}
        </h3>


        <p>

            ${escapeHTML(paper.course)}

            •
            
            ${escapeHTML(paper.semester)}

            •
            
            ${escapeHTML(paper.subject)}

        </p>


        <div class="paper-tags">

            <span>
                ${escapeHTML(paper.type)}
            </span>

            <span>
                ${escapeHTML(paper.course)}
            </span>

            <span>
                ${escapeHTML(paper.semester)}
            </span>

        </div>


        <div class="paper-actions">


            <button

                class="paper-btn view-btn"

                onclick="viewPaper(${paper.id})">

                👁 View

            </button>


            <button

                class="paper-btn ai-btn"

                onclick="practiceWithAI(${paper.id})">

                🤖 Practice with AI

            </button>


            ${
                paper.pdf

                ?

                `

                <button

                    class="paper-btn download-btn"

                    onclick="downloadPaper(${paper.id})">

                    ⬇ Download

                </button>

                `

                :

                ""

            }


        </div>

    `;


    return card;

}



/* =====================================================
   EMPTY STATE
   ===================================================== */

function showEmptyState() {

    paperList.innerHTML = `

        <div class="empty-papers">

            <div class="empty-icon">
                📄
            </div>

            <h3>
                No papers found
            </h3>

            <p>
                Try changing your course,
                semester, paper type or search term.
            </p>

        </div>

    `;

}



/* =====================================================
   VIEW PAPER
   ===================================================== */

function viewPaper(id) {

    const paper =
        papersData.find(
            item => item.id === id
        );


    if (!paper) {
        return;
    }


    document.getElementById(
        "modalTitle"
    ).textContent =
        paper.title;


    document.getElementById(
        "modalBody"
    ).innerHTML = `

        <p>

            <strong>Course:</strong>
            ${escapeHTML(paper.course)}

        </p>

        <p>

            <strong>Semester:</strong>
            ${escapeHTML(paper.semester)}

        </p>

        <p>

            <strong>Subject:</strong>
            ${escapeHTML(paper.subject)}

        </p>

        <p>

            <strong>Type:</strong>
            ${escapeHTML(paper.type)}

        </p>


        ${
            paper.pdf

            ?

            `

            <p>

                This paper has a PDF attached.

            </p>

            <button

                class="paper-btn ai-btn"

                onclick="downloadPaper(${paper.id})">

                ⬇ Open PDF

            </button>

            `

            :

            `

            <div style="
                margin-top:20px;
                padding:18px;
                border-radius:12px;
                background:rgba(255,255,255,.04);
            ">

                <strong>
                    Paper PDF not added yet.
                </strong>

                <p style="
                    margin-top:8px;
                    color:#8f9aae;
                ">

                    Add the verified PDF path
                    in the <b>pdf</b> field of
                    papers.js.

                </p>

            </div>

            `

        }

    `;


    document
        .getElementById("paperModal")
        .classList.add("show");

}



/* =====================================================
   DOWNLOAD PAPER
   ===================================================== */

function downloadPaper(id) {

    const paper =
        papersData.find(
            item => item.id === id
        );


    if (!paper) {
        return;
    }


    if (!paper.pdf) {

        alert(
            "The PDF for this paper has not been added yet."
        );

        return;

    }


    window.open(
        paper.pdf,
        "_blank"
    );

}



/* =====================================================
   PRACTICE WITH AI
   ===================================================== */

function practiceWithAI(id) {

    const paper =
        papersData.find(
            item => item.id === id
        );


    if (!paper) {
        return;
    }


    const prompt =

        `Help me practice the ${paper.title}. ` +

        `It is for ${paper.course}, ` +

        `${paper.semester}, ` +

        `${paper.subject}. ` +

        `Give me important questions, explain ` +

        `the concepts and quiz me step by step.`;


    window.location.href =

        "tutor.html?question=" +

        encodeURIComponent(prompt);

}



/* =====================================================
   CLEAR FILTERS
   ===================================================== */

function clearPaperFilters() {

    paperSearch.value = "";

    paperCourse.value = "all";

    paperSemester.value = "all";

    paperType.value = "all";


    renderPapers();

}



/* =====================================================
   CLOSE MODAL
   ===================================================== */

function closePaperModal() {

    document
        .getElementById("paperModal")
        .classList.remove("show");

}


function closeModalOutside(event) {

    if (
        event.target.id ===
        "paperModal"
    ) {

        closePaperModal();

    }

}



/* =====================================================
   ESCAPE KEY
   ===================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape"
        ) {

            closePaperModal();

        }

    }
);



/* =====================================================
   HTML ESCAPE
   ===================================================== */

function escapeHTML(value) {

    const div =
        document.createElement("div");

    div.textContent =
        String(value);

    return div.innerHTML;

}



/* =====================================================
   FILTER EVENTS
   ===================================================== */

if (paperSearch) {

    paperSearch.addEventListener(
        "input",
        renderPapers
    );

}


if (paperCourse) {

    paperCourse.addEventListener(
        "change",
        renderPapers
    );

}


if (paperSemester) {

    paperSemester.addEventListener(
        "change",
        renderPapers
    );

}


if (paperType) {

    paperType.addEventListener(
        "change",
        renderPapers
    );

}



/* =====================================================
   START
   ===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    renderPapers
);
