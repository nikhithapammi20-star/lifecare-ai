
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const message = body.message;

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Please enter a valid message." },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;

    console.log("Gemini API key available:", !!apiKey);

    if (!apiKey) {
      console.error("GEMINI_API_KEY is not configured");

      return NextResponse.json(
        { error: "AI service is not configured." },
        { status: 500 }
      );
    }

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey,
        },
        body: JSON.stringify({
          systemInstruction: {
            parts: [
              {
                text: `You are LifeCare AI, a helpful healthcare information assistant.

Give simple, clear and safe health information.

Important rules:
- Do not claim to diagnose diseases.
- Do not prescribe medicines.
- Do not tell users to stop prescribed medicines.
- Give general health information only.
- If symptoms could indicate an emergency, advise the user to contact emergency medical services or a qualified healthcare professional.
- Encourage users to consult a doctor for persistent, severe, or concerning symptoms.
- Keep answers easy to understand.`,
              },
            ],
          },
          contents: [
            {
              role: "user",
              parts: [{ text: message }],
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();

      console.error(
        "Gemini API error:",
        response.status,
        errorText
      );

      return NextResponse.json(
        {
          error: "AI service request failed. Please try again.",
        },
        { status: 502 }
      );
    }

    const data = await response.json();

    const reply = data.candidates?.[0]?.content?.parts
      ?.map((part: { text?: string }) => part.text || "")
      .join("")
      .trim();

    if (!reply) {
      console.error("Gemini returned no response:", data);

      return NextResponse.json(
        { error: "The AI could not generate a response." },
        { status: 502 }
      );
    }

    return NextResponse.json({ reply });

  } catch (error) {
    console.error("AI API error:", error);

    return NextResponse.json(
      {
        error: "Unable to connect to the AI service.",
      },
      { status: 500 }
    );
  }
}
