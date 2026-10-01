import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const message = body?.message;

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        {
          error: "Please enter a valid message.",
        },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          error: "Gemini API key is not configured.",
        },
        { status: 500 }
      );
    }

    // Try these models in order
    const models = [
      "gemini-3.8-flash",
      "gemini-3.7-flash",
      "gemini-3.6-flash",
    ];

    const requestBody = {
      system_instruction: {
        parts: [
          {
            text: `
You are LifeCare AI, a helpful healthcare information assistant.

Give simple, clear, safe and supportive general health information.

Rules:
- Do not diagnose diseases with certainty.
- Do not prescribe medicines.
- Do not provide medicine dosages.
- Do not tell users to stop prescribed medicines.
- Give general health information only.
- Recommend consulting a qualified healthcare professional for persistent, severe, worsening, or concerning symptoms.
- If the user describes a possible emergency, advise them to seek urgent medical help.
- Use simple English.
- Be friendly and concise.
- Explain medical terms in simple language.
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
    };

    // Try each model
    for (const model of models) {
      const url =
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;

      console.log(`Trying Gemini model: ${model}`);

      // Retry each model up to 2 times
      for (let attempt = 1; attempt <= 2; attempt++) {
        const response = await fetch(url, {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": apiKey,
          },

          body: JSON.stringify(requestBody),
        });

        const data = await response.json();

        // SUCCESS
        if (response.ok) {
          const reply =
            data?.candidates?.[0]?.content?.parts?.[0]?.text;

          if (!reply) {
            console.error(
              `Gemini ${model} returned no text.`
            );

            break;
          }

          console.log(`Gemini success using: ${model}`);

          return NextResponse.json({
            reply,
          });
        }

        // Temporary error
        const temporaryError =
          response.status === 429 ||
          response.status === 500 ||
          response.status === 502 ||
          response.status === 503 ||
          response.status === 504;

        if (temporaryError) {
          console.log(
            `Gemini ${model} returned ${response.status} on attempt ${attempt}.`
          );

          // If first attempt, wait before retrying
          if (attempt < 2) {
            const delay = 2000;

            console.log(
              `Waiting ${delay}ms before retry...`
            );

            await new Promise((resolve) =>
              setTimeout(resolve, delay)
            );

            continue;
          }

          // Model still unavailable.
          // Move to next model.
          console.log(
            `Gemini ${model} unavailable. Trying next model...`
          );

          break;
        }

        // Non-temporary error
        console.error(
          `Gemini ${model} API Error:`,
          response.status,
          JSON.stringify(data, null, 2)
        );

        const googleMessage =
          data?.error?.message ||
          "Gemini request failed.";

        return NextResponse.json(
          {
            error: `Gemini API Error: ${googleMessage}`,
          },
          {
            status: response.status,
          }
        );
      }
    }

    // All models failed
    return NextResponse.json(
      {
        error:
          "Gemini AI is temporarily busy. Please try again in a few moments.",
      },
      { status: 503 }
    );
  } catch (error) {
    console.error("AI API Error:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unable to connect to Gemini AI.",
      },
      { status: 500 }
    );
  }
}