/* =====================================================
   PAPER DATABASE
   ===================================================== */

const papersData = [

    {
        course:"BA",
        semester:"Semester 1",
        subject:"English",
        title:"English Practice Paper 1",
        year:"Practice"
    },

    {
        course:"BA",
        semester:"Semester 2",
        subject:"History",
        title:"History Practice Paper 1",
        year:"Practice"
    },

    {
        course:"BSc",
        semester:"Semester 1",
        subject:"Botany",
        title:"Botany Practice Paper",
        year:"Practice"
    },

    {
        course:"BSc",
        semester:"Semester 2",
        subject:"Chemistry",
        title:"Chemistry Practice Paper",
        year:"Practice"
    },

    {
        course:"BSc",
        semester:"Semester 2",
        subject:"Zoology",
        title:"Zoology Practice Paper",
        year:"Practice"
    },

    {
        course:"BCom",
        semester:"Semester 1",
        subject:"Accounting",
        title:"Financial Accounting Practice Paper",
        year:"Practice"
    },

    {
        course:"BCom",
        semester:"Semester 2",
        subject:"Economics",
        title:"Business Economics Practice Paper",
        year:"Practice"
    },

    {
        course:"MA",
        semester:"Semester 1",
        subject:"English",
        title:"MA English Practice Paper",
        year:"Practice"
    },

    {
        course:"MSc",
        semester:"Semester 1",
        subject:"Chemistry",
        title:"MSc Chemistry Practice Paper",
        year:"Practice"
    },

    {
        course:"MCom",
        semester:"Semester 1",
        subject:"Accounting",
        title:"Advanced Accounting Practice Paper",
        year:"Practice"
    }

];


function renderPapers() {

    const list =
        document.getElementById("paperList");

    const course =
        document.getElementById("paperCourse").value;

    const semester =
        document.getElementById("paperSemester").value;

    const search =
        document.getElementById("paperSearch")
        .value
        .toLowerCase()
        .trim();


    list.innerHTML = "";


    const filtered =
        papersData.filter(paper => {

            const courseMatch =
                course === "all" ||
                paper.course === course;


            const semesterMatch =
                semester === "all" ||
                paper.semester === semester;


            const searchMatch =
                paper.subject
                    .toLowerCase()
                    .includes(search) ||

                paper.title
                    .toLowerCase()
                    .includes(search);


            return (
                courseMatch &&
                semesterMatch &&
                searchMatch
            );

        });


    filtered.forEach(paper => {

        const card =
            document.createElement("div");

        card.className =
            "paper-card";


        card.innerHTML = `

            <div class="paper-icon">
                📄
            </div>

            <div class="paper-info">

                <h3>
                    ${paper.title}
                </h3>

                <p>
                    ${paper.course}
                    •
                    ${paper.semester}
                    •
                    ${paper.subject}
                    •
                    ${paper.year}
                </p>

            </div>

            <button
                class="paper-button"
                onclick="practicePaper('${paper.title}')">

                Practice

            </button>

        `;


        list.appendChild(card);

    });


    if (!filtered.length) {

        list.innerHTML = `

            <div class="paper-card">

                <div class="paper-info">

                    <h3>
                        No papers found
                    </h3>

                    <p>
                        Try another course or semester.
                    </p>

                </div>

            </div>

        `;

    }

}


function practicePaper(title) {

    window.location.href =
        "tutor.html?paper=" +
        encodeURIComponent(title);

}


document.addEventListener(
    "DOMContentLoaded",
    function() {

        renderPapers();


        document
            .getElementById("paperCourse")
            .addEventListener(
                "change",
                renderPapers
            );


        document
            .getElementById("paperSemester")
            .addEventListener(
                "change",
                renderPapers
            );


        document
            .getElementById("paperSearch")
            .addEventListener(
                "input",
                renderPapers
            );

    }
);
