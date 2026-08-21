/* =====================================================
   SRKP AI STUDY ASSISTANT
   BACKEND SERVER
   Designed & Developed by Anish Jodhawat
   ===================================================== */

const express = require("express");
const OpenAI = require("openai");
const path = require("path");

const app = express();

const PORT =
    process.env.PORT || 3000;


/* =====================================================
   OPENAI CLIENT
   ===================================================== */

if (!process.env.OPENAI_API_KEY) {

    console.warn(
        "WARNING: OPENAI_API_KEY is not configured."
    );

}

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});


/* =====================================================
   MIDDLEWARE
   ===================================================== */

app.use(express.json({
    limit: "1mb"
}));


app.use(
    express.static(
        path.join(__dirname, "..")
    )
);


/* =====================================================
   AI TUTOR
   ===================================================== */

app.post("/api/ask", async (req, res) => {

    try {

        const {
            question,
            course,
            semester,
            subject
        } = req.body;


        if (
            !question ||
            typeof question !== "string"
        ) {

            return res.status(400).json({
                error: "Please enter a question."
            });

        }


        if (!process.env.OPENAI_API_KEY) {

            return res.status(500).json({

                error:
                    "AI service is not configured. Add OPENAI_API_KEY to the server environment."

            });

        }


        /* =================================================
           STUDENT CONTEXT
           ================================================= */

        let context = "";

        if (course) {
            context += `Course: ${course}\n`;
        }

        if (semester) {
            context += `Semester: ${semester}\n`;
        }

        if (subject) {
            context += `Subject: ${subject}\n`;
        }


        /* =================================================
           PERSONAL TUTOR INSTRUCTIONS
           ================================================= */

        const instructions = `

You are the SRKP Personal AI Study Tutor.

You are designed for college students studying:

BA
BSc
BCom
MA
MSc
MCom

The student may ask about ANY academic topic.

Do NOT restrict the student to predefined topics.

Help with:

- explanations
- definitions
- examples
- mathematics
- science
- commerce
- humanities
- literature
- history
- geography
- economics
- political science
- accounting
- business studies
- revision
- exam preparation
- MCQs
- short notes
- long answers
- step-by-step problem solving
- concept comparisons

Teaching style:

1. Understand what the student is asking.
2. Explain clearly.
3. Use simple language when possible.
4. Break difficult concepts into steps.
5. Give examples where useful.
6. Highlight important exam points.
7. If the question is ambiguous, ask a short clarification.
8. Never pretend that uncertain information is definitely correct.
9. For syllabus-specific questions, explain that the official university syllabus should be checked when exact current details matter.
10. Do not fabricate official examination papers or university documents.

The answer should be useful for an Indian college student.

Student academic context:

${context}

`;


        /* =================================================
           RESPONSES API
           ================================================= */

        const response =
            await client.responses.create({

                model: "gpt-5.6-luna",

                instructions:
                    instructions,

                input:
                    question

            });


        const answer =
            response.output_text;


        res.json({

            answer:
                answer ||
                "I couldn't generate an answer."

        });

    }


    catch (error) {

        console.error(
            "AI Tutor Error:",
            error
        );


        res.status(500).json({

            error:
                "The AI tutor is temporarily unavailable. Please try again."

        });

    }

});


/* =====================================================
   HEALTH CHECK
   ===================================================== */

app.get("/api/health", (req, res) => {

    res.json({

        status: "online",

        service:
            "SRKP AI Study Assistant"

    });

});


/* =====================================================
   START SERVER
   ===================================================== */

app.listen(
    PORT,
    () => {

        console.log(
            `SRKP AI Study Assistant running on port ${PORT}`
        );

    }
);
