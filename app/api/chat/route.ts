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

    if (!apiKey) {
      return NextResponse.json(
        { error: "Gemini AI service is not configured." },
        { status: 500 }
      );
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          systemInstruction: {
            parts: [
              {
                text: `
You are LifeCare AI, a helpful healthcare information assistant.

Give simple, clear and safe health information.

Important rules:
- Do not claim to diagnose diseases.
- Do not prescribe medicines or dosages.
- Do not tell users to stop prescribed medicines.
- Give general health information only.
- If symptoms could indicate an emergency, advise the user to contact emergency medical services or a qualified healthcare professional.
- Encourage users to consult a doctor for persistent, severe, or concerning symptoms.
- Keep answers easy to understand.
                `,
              },
            ],
          },
          contents: [
            {
              parts: [
                {
                  text: message,
                },
              ],
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();

      console.error("Gemini API Error:", errorText);

      return NextResponse.json(
        {
          error: "Gemini AI could not generate a response.",
        },
        { status: 500 }
      );
    }

    const data = await response.json();

    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I could not generate a response.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("AI API Error:", error);

    return NextResponse.json(
      {
        error: "Unable to connect to Gemini AI.",
      },
      { status: 500 }
    );
  }
}