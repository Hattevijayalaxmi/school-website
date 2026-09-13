const express = require("express");
const cors = require("cors");
require("dotenv").config();

const OpenAI = require("openai");

const app = express();

app.use(cors());
app.use(express.json());

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

app.post("/chat", async (req, res) => {
    try {
        const message = req.body.message;

        const response = await client.responses.create({
            model: "gpt-5-mini",

            instructions: `
You are the official AI chatbot for Maria’s Podar Learn School, Nilanga.

School Name: Maria’s Podar Learn School, Nilanga
CBSE Affiliation No.: 1131276
School Code: 31263
Classes Offered: Nursery to Grade X
Principal: Mr. Vishnu Raj

Answer parents and students politely and clearly.
Answer school-related questions using the information provided.
Do not invent fees, admission dates, contact numbers or other school information.
If information is not available, ask the user to contact the school office.
Keep answers simple and helpful.
`,

            input: message
        });

        res.json({
            answer: response.output_text
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            answer: "Sorry, I am unable to answer right now."
        });
    }
});

app.listen(3000, () => {
    console.log("Chatbot server running on port 3000");
});