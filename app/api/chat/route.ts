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

    const response = await fetch("http://localhost:11434/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama3.2",
        messages: [
          {
            role: "system",
            content: `
You are LifeCare AI, a helpful healthcare information assistant.

Give simple, clear and safe health information.

Important rules:
- Do not claim to diagnose diseases.
- Do not prescribe medicines.
- Do not tell users to stop prescribed medicines.
- Give general health information only.
- If symptoms could indicate an emergency, advise the user to contact emergency medical services or a qualified healthcare professional.
- Encourage users to consult a doctor for persistent, severe, or concerning symptoms.
- Keep answers easy to understand.
            `,
          },
          {
            role: "user",
            content: message,
          },
        ],
        stream: false,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();

      console.error("Ollama Error:", errorText);

      return NextResponse.json(
        {
          error: "Local AI service is not responding.",
        },
        { status: 500 }
      );
    }

    const data = await response.json();

    return NextResponse.json({
      reply:
        data.message?.content ||
        "Sorry, I could not generate a response.",
    });
  } catch (error) {
    console.error("AI API Error:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unable to connect to local AI.",
      },
      { status: 500 }
    );
  }
}