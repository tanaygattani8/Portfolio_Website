import { NextRequest, NextResponse } from "next/server";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { recommendations } from "@/data/recommendations";

// Build the grounding context from portfolio data
function buildContext(): string {
  const sections: string[] = [];

  // Profile basics
  sections.push(`=== PERSONAL INFO ===
Name: ${profile.name}
Title: ${profile.title}
Email: ${profile.email}
Phone: ${profile.phone}
Location: ${profile.location}
LinkedIn: ${profile.linkedin}
GitHub: ${profile.github}`);

  // About
  sections.push(`=== ABOUT ===
${profile.aboutIntro}
${profile.aboutBullets.join("\n")}
${profile.aboutOutro}`);

  // Education
  sections.push(`=== EDUCATION ===
${profile.education
  .map(
    (e) =>
      `${e.degree} — ${e.institution} (${e.dates})\nCoursework: ${e.coursework}`
  )
  .join("\n\n")}`);

  // Experience
  sections.push(`=== EXPERIENCE ===
${profile.experience
  .map(
    (e) =>
      `${e.title} at ${e.company} (${e.dates}, ${e.location})\n${e.bullets.map((b) => `• ${b}`).join("\n")}`
  )
  .join("\n\n")}`);

  // Certifications
  sections.push(`=== CERTIFICATIONS ===
${profile.certifications.map((c) => `• ${c}`).join("\n")}`);

  // Career progression
  sections.push(`=== CAREER PROGRESSION ===
${profile.careerProgression
  .map((c) => `${c.title}${c.isCurrent ? " (Current)" : ""}: ${c.description}`)
  .join("\n")}`);

  // Projects
  sections.push(`=== PROJECTS ===
${projects
  .map(
    (p) =>
      `Project: ${p.title}
Category: ${p.category}
Description: ${p.description}
Tech Stack: ${p.techStack.join(", ")}
Highlights: ${p.highlights.map((h) => `• ${h}`).join("\n")}
${p.githubUrl ? `GitHub: ${p.githubUrl}` : ""}`
  )
  .join("\n\n")}`);

  // Recommendations
  sections.push(`=== LINKEDIN RECOMMENDATIONS ===
${recommendations
  .map(
    (r) =>
      `From: ${r.name} (${r.title})
Relationship: ${r.relationship}
Date: ${r.date}
"${r.text}"`
  )
  .join("\n\n")}`);

  return sections.join("\n\n");
}

const SYSTEM_PROMPT = `You are Tanay Gattani's portfolio assistant. You answer questions about Tanay on his behalf, speaking in a helpful, professional, and friendly tone.

STRICT RULES:
1. You may ONLY use the information provided in the CONTEXT below to answer questions. Do NOT invent, assume, or hallucinate any information.
2. If someone asks something that is NOT covered in the context, reply with: "I don't have enough information to answer that. You can reach Tanay directly at tgattani@wisc.edu for more details!"
3. When talking about Tanay, use third person ("Tanay" or "he") unless the question specifically asks you to respond as if you are Tanay.
4. Keep answers concise — aim for 2-4 sentences unless the question warrants more detail.
5. You can reference specific projects, experiences, and skills from the context.
6. Do NOT answer questions unrelated to Tanay's professional background (e.g., politics, general trivia, coding help).
7. Be warm and conversational, but always factual.

=== CONTEXT ===
${buildContext()}
=== END CONTEXT ===`;

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Messages are required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "AI service is not configured" },
        { status: 500 }
      );
    }

    // Build conversation history for Gemini
    const contents = messages.map(
      (msg: { role: string; content: string }) => ({
        role: msg.role === "assistant" ? "model" : "user",
        parts: [{ text: msg.content }],
      })
    );

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system_instruction: {
            parts: [{ text: SYSTEM_PROMPT }],
          },
          contents,
          generationConfig: {
            temperature: 0.3,
            maxOutputTokens: 512,
            topP: 0.8,
          },
          safetySettings: [
            {
              category: "HARM_CATEGORY_HARASSMENT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE",
            },
            {
              category: "HARM_CATEGORY_HATE_SPEECH",
              threshold: "BLOCK_MEDIUM_AND_ABOVE",
            },
            {
              category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE",
            },
            {
              category: "HARM_CATEGORY_DANGEROUS_CONTENT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE",
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      console.error("Gemini API error:", response.status, errorData);
      return NextResponse.json(
        { error: "Failed to get response from AI" },
        { status: 502 }
      );
    }

    const data = await response.json();
    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "I'm sorry, I couldn't generate a response. Please try again.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
