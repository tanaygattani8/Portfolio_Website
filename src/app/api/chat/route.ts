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
      `${e.degree}, ${e.institution} (${e.dates})\nCoursework: ${e.coursework}`
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
2. If someone asks something that is NOT covered in the context, reply with: "I don't have enough information to answer that. You can reach Tanay directly at tanaygattani8@gmail.com for more details!"
3. When talking about Tanay, use third person ("Tanay" or "he") unless the question specifically asks you to respond as if you are Tanay.
4. Keep answers concise; aim for 2-4 sentences unless the question warrants more detail.
5. You can reference specific projects, experiences, and skills from the context.
6. Do NOT answer questions unrelated to Tanay's professional background (e.g., politics, general trivia, coding help).
7. Be warm and conversational, but always factual.
8. Never use em dashes (long dashes) in your replies; use commas, colons, or hyphens instead.

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

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey || apiKey === "your_groq_api_key_here") {
      return NextResponse.json({
        reply: "Hi there! It looks like my Groq API key isn't configured yet. Set `GROQ_API_KEY` in `.env.local` (grab a free key at https://console.groq.com/) to start chatting with me!"
      });
    }

    // Groq is OpenAI-compatible; client messages already use {role, content}.
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        temperature: 0.3,
        max_tokens: 512,
        top_p: 0.8,
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      console.error("Groq API error:", response.status, errorData);
      return NextResponse.json(
        { error: "Failed to get response from AI" },
        { status: 502 }
      );
    }

    const data = await response.json();
    const reply =
      data?.choices?.[0]?.message?.content ||
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
