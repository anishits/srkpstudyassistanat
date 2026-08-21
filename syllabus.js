/* =====================================================
   SRKP SYLLABUS DATABASE
   ===================================================== */

const syllabusData = [

    {
        course: "BA",
        semesters: 6,
        subjects: [
            "English",
            "Hindi",
            "History",
            "Political Science",
            "Geography",
            "Economics",
            "Sociology",
            "Public Administration"
        ]
    },

    {
        course: "BSc",
        semesters: 6,
        subjects: [
            "Botany",
            "Zoology",
            "Chemistry",
            "Physics",
            "Mathematics",
            "Computer Science",
            "Environmental Science"
        ]
    },

    {
        course: "BCom",
        semesters: 6,
        subjects: [
            "Financial Accounting",
            "Business Economics",
            "Business Law",
            "Management",
            "Marketing",
            "Income Tax",
            "Cost Accounting",
            "Business Statistics"
        ]
    },

    {
        course: "MA",
        semesters: 4,
        subjects: [
            "English",
            "Hindi",
            "History",
            "Political Science",
            "Economics",
            "Sociology",
            "Geography"
        ]
    },

    {
        course: "MSc",
        semesters: 4,
        subjects: [
            "Botany",
            "Zoology",
            "Chemistry",
            "Physics",
            "Mathematics",
            "Computer Science"
        ]
    },

    {
        course: "MCom",
        semesters: 4,
        subjects: [
            "Advanced Accounting",
            "Business Management",
            "Financial Management",
            "Marketing Management",
            "Business Economics",
            "Taxation",
            "Research Methodology"
        ]
    }

];


function renderSyllabus() {

    const list =
        document.getElementById("syllabusList");

    const course =
        document.getElementById("syllabusCourse").value;

    const semester =
        document.getElementById("syllabusSemester").value;

    const search =
        document.getElementById("syllabusSearch")
        .value
        .toLowerCase()
        .trim();


    list.innerHTML = "";


    syllabusData.forEach(item => {

        if (
            course !== "all" &&
            item.course !== course
        ) {
            return;
        }


        const subjects =
            item.subjects.filter(subject =>
                subject
                    .toLowerCase()
                    .includes(search)
            );


        if (subjects.length === 0) return;


        const card =
            document.createElement("div");

        card.className =
            "course-card";


        const maxSemester =
            item.semesters;


        let semesterText =
            semester === "all"
            ? `Semester 1–${maxSemester}`
            : `Semester ${semester}`;


        if (
            semester !== "all" &&
            Number(semester) > maxSemester
        ) {
            return;
        }


        card.innerHTML = `

            <h2>
                ${item.course}
            </h2>

            <p>
                ${semesterText}
                • ${subjects.length} subjects shown
            </p>

            <div class="subjects">

                ${subjects
                    .map(subject =>
                        `<span>${subject}</span>`
                    )
                    .join("")}

            </div>

        `;


        list.appendChild(card);

    });


    if (!list.children.length) {

        list.innerHTML = `

            <div class="course-card">

                <h2>
                    No syllabus found
                </h2>

                <p>
                    Try another course, semester
                    or search term.
                </p>

            </div>

        `;

    }

}


document.addEventListener(
    "DOMContentLoaded",
    function() {

        renderSyllabus();


        document
            .getElementById("syllabusCourse")
            .addEventListener(
                "change",
                renderSyllabus
            );


        document
            .getElementById("syllabusSemester")
            .addEventListener(
                "change",
                renderSyllabus
            );


        document
            .getElementById("syllabusSearch")
            .addEventListener(
                "input",
                renderSyllabus
            );

    }
);
