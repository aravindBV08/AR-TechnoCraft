import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";


dotenv.config();

// Setup __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// ===== Middleware =====
app.use(cors());
app.use(bodyParser.json());

// ===== Contact Form API =====
app.post("/api/send-email", async (req, res) => {
  const { fullname, email, phone, subject, description } = req.body;

  if (!fullname || !email || !phone || !subject || !description) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: "nn1528523@gmail.com",
      subject: `New Contact Form: ${subject}`,
      text: `
Name: ${fullname}
Email: ${email}
Phone: ${phone}
Subject: ${subject}

Message:
${description}
      `,
    });

    res.status(200).json({ message: "✅ Message sent successfully" });
  } catch (err) {
    console.error("❌ Error sending email:", err);
    res
      .status(500)
      .json({ message: "Failed to send message", error: err.message });
  }
});

// ===== Serve static assets =====
const distPath = path.join(__dirname, "./dist");
app.use(express.static(distPath));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 SSR Server running at http://localhost:${PORT}`)
);
