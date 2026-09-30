import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // Read request body
    const body = await request.json();
    const message = body.message;

    // Validate message
    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        {
          error: "Please enter a valid message.",
        },
        { status: 400 }
      );
    }

    // Get Gemini API key from environment variable
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      console.error("GEMINI_API_KEY is missing.");

      return NextResponse.json(
        {
          error: "Gemini AI service is not configured.",
        },
        { status: 500 }
      );
    }

    // Gemini API request
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

Your purpose is to provide simple, clear, supportive, and safe general health information.

IMPORTANT SAFETY RULES:

1. Do not diagnose diseases with certainty.
2. Do not prescribe medicines.
3. Do not recommend specific medicine dosages.
4. Do not tell users to stop or change prescribed medicines.
5. Do not replace a qualified doctor or healthcare professional.
6. If symptoms may indicate an emergency, clearly advise the user to seek urgent medical help.
7. For persistent, severe, worsening, or concerning symptoms, recommend consulting a qualified healthcare professional.
8. Do not make assumptions about the user's medical history.
9. Use simple English that is easy for students and general users to understand.
10. Give practical general wellness suggestions when appropriate.
11. Avoid overly specific universal health targets when individual needs can vary.
12. If the user asks about mental wellness, respond supportively and encourage professional help when appropriate.
13. If the user mentions immediate danger, self-harm, or suicidal thoughts, encourage them to contact emergency services or a trusted person and seek immediate professional help.

RESPONSE STYLE:

- Be friendly and respectful.
- Use headings and bullet points when useful.
- Keep answers clear and reasonably concise.
- Explain medical terms in simple language.
- Do not create unnecessary fear.
- Mention when professional medical advice is appropriate.

You are providing general health information, not a medical diagnosis or treatment plan.
                `,
              },
            ],
          },

          contents: [
            {
              role: "user",
              parts: [
                {
                  text: message.trim(),
                },
              ],
            },
          ],
        }),
      }
    );

    // Handle Gemini API errors
    if (!response.ok) {
      const errorText = await response.text();

      console.error(
        "Gemini API Error:",
        response.status,
        errorText
      );

      let errorMessage =
        "Gemini AI could not generate a response. Please try again.";

      if (response.status === 400) {
        errorMessage =
          "The request sent to Gemini was invalid. Please try again.";
      } else if (response.status === 401) {
        errorMessage =
          "The Gemini API key is invalid or unauthorized.";
      } else if (response.status === 403) {
        errorMessage =
          "The Gemini API key does not have permission to use this service.";
      } else if (response.status === 404) {
        errorMessage =
          "The selected Gemini model is not available for this API key.";
      } else if (response.status === 429) {
        errorMessage =
          "Gemini API usage limit was reached. Please try again later.";
      } else if (response.status >= 500) {
        errorMessage =
          "Gemini is temporarily unavailable. Please try again later.";
      }

      return NextResponse.json(
        {
          error: errorMessage,
        },
        {
          status: response.status,
        }
      );
    }

    // Read Gemini response
    const data = await response.json();

    console.log("Gemini response received successfully.");

    // Extract generated text
    const reply =
      data?.candidates?.[0]?.content?.parts
        ?.map((part: { text?: string }) => part.text || "")
        .join("") ||
      "Sorry, I could not generate a response.";

    return NextResponse.json({
      reply,
    });
  } catch (error) {
    console.error("AI API Error:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? `AI connection error: ${error.message}`
            : "Unable to connect to Gemini AI.",
      },
      { status: 500 }
    );
  }
}