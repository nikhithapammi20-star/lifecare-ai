
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Message = {
  role: "user" | "assistant";
  text: string;
};

const quickQuestions = [
  "How can I improve my sleep?",
  "What are healthy breakfast options?",
  "How much water should I drink?",
  "How can I reduce daily stress?",
];

const INITIAL_MESSAGE: Message = {
  role: "assistant",
  text: "Hello! 👋 I'm LifeCare AI. How can I help you today?",
};

export default function AssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    INITIAL_MESSAGE,
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Automatically scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  // Send message to the AI backend
  const sendMessage = async (messageText?: string) => {
    const question = (messageText ?? input).trim();

    if (!question || isTyping) {
      return;
    }

    const userMessage: Message = {
      role: "user",
      text: question,
    };

    setMessages((previous) => [...previous, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: question,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error || "Something went wrong."
        );
      }

      const assistantMessage: Message = {
        role: "assistant",
        text:
          data?.reply ||
          "Sorry, I couldn't generate a response.",
      };

      setMessages((previous) => [
        ...previous,
        assistantMessage,
      ]);
    } catch (error) {
      console.error("Chat error:", error);

      const errorMessage: Message = {
        role: "assistant",
        text:
          "Sorry, I couldn't connect to the AI service right now. Please check your API configuration and try again.",
      };

      setMessages((previous) => [
        ...previous,
        errorMessage,
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  // Press Enter to send
  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  };

  // Clear conversation
  const clearChat = () => {
    setMessages([INITIAL_MESSAGE]);
    setInput("");
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-xl text-white shadow-sm">
              ❤️
            </div>

            <div>
              <h1 className="font-bold text-blue-700">
                LifeCare AI
              </h1>
              <p className="text-xs text-slate-500">
                Health Assistant
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={clearChat}
              disabled={isTyping}
              className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Clear Chat
            </button>

            <Link
              href="/"
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              ← Home
            </Link>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        {/* TITLE */}
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-3xl shadow-sm">
            🤖
          </div>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            AI Health Assistant
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
            Ask questions about general health, wellness,
            nutrition, fitness, sleep, and common health concerns.
          </p>
        </div>

        {/* CHAT BOX */}
        <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
          {/* CHAT HEADER */}
          <div className="flex items-center justify-between bg-blue-600 px-5 py-4 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl">
                🤖
              </div>

              <div>
                <h3 className="font-bold">
                  LifeCare AI Assistant
                </h3>
                <p className="text-xs text-blue-100">
                  ● Online
                </p>
              </div>
            </div>

            <span className="rounded-full bg-blue-500 px-3 py-1 text-xs font-semibold">
              AI
            </span>
          </div>

          {/* MESSAGES */}
          <div className="min-h-[420px] max-h-[520px] space-y-4 overflow-y-auto bg-slate-50 p-4 sm:p-5">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`flex ${
                  message.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[90%] rounded-2xl px-4 py-3 sm:max-w-[80%] ${
                    message.role === "user"
                      ? "rounded-br-md bg-blue-600 text-white"
                      : "rounded-bl-md bg-white text-slate-700 shadow-sm ring-1 ring-slate-200"
                  }`}
                >
                  <p className="whitespace-pre-wrap text-sm leading-6">
                    {message.text}
                  </p>
                </div>
              </div>
            ))}

            {/* TYPING INDICATOR */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-md bg-white px-5 py-3 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center gap-1">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:150ms]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:300ms]" />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* INPUT AREA */}
          <div className="border-t border-slate-200 bg-white p-4">
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={input}
                  onChange={(event) =>
                    setInput(event.target.value)
                  }
                  onKeyDown={handleKeyDown}
                  disabled={isTyping}
                  maxLength={500}
                  placeholder="Type your health question..."
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 pr-16 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 disabled:bg-slate-100 disabled:text-slate-500"
                />

                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500">
                  {input.length}/500
                </span>
              </div>

              <button
                type="button"
                onClick={() => sendMessage()}
                disabled={!input.trim() || isTyping}
                className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
              >
                {isTyping ? "Thinking..." : "Send"}
              </button>
            </div>

            <p className="mt-2 text-center text-xs text-slate-500">
              Press Enter to send
            </p>
          </div>
        </div>

        {/* QUICK QUESTIONS */}
        <div className="mt-8">
          <h3 className="text-center font-bold text-slate-800">
            Try asking
          </h3>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {quickQuestions.map((question) => (
              <button
                type="button"
                key={question}
                onClick={() => sendMessage(question)}
                disabled={isTyping}
                className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-left text-sm text-slate-700 shadow-sm transition hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                💬 {question}
              </button>
            ))}
          </div>
        </div>

        {/* FEATURES */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-white p-5 text-center shadow-sm ring-1 ring-slate-200">
            <div className="text-3xl">💬</div>
            <h3 className="mt-3 font-bold">Ask Questions</h3>
            <p className="mt-2 text-sm leading-5 text-slate-500">
              Ask about general health and wellness topics.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 text-center shadow-sm ring-1 ring-slate-200">
            <div className="text-3xl">💡</div>
            <h3 className="mt-3 font-bold">Get Guidance</h3>
            <p className="mt-2 text-sm leading-5 text-slate-500">
              Receive simple educational health information.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 text-center shadow-sm ring-1 ring-slate-200">
            <div className="text-3xl">🩺</div>
            <h3 className="mt-3 font-bold">
              Know When to Seek Help
            </h3>
            <p className="mt-2 text-sm leading-5 text-slate-500">
              Serious symptoms should be discussed with a professional.
            </p>
          </div>
        </div>

        {/* HEALTH DISCLAIMER */}
        <div className="mt-8 rounded-2xl border border-yellow-200 bg-yellow-50 p-5">
          <h3 className="font-bold text-yellow-900">
            ⚠️ Important Health Notice
          </h3>

          <p className="mt-2 text-sm leading-6 text-yellow-800">
            LifeCare AI provides general educational information
            and is not a replacement for professional medical
            diagnosis or treatment. If you have a serious or
            emergency medical concern, contact local emergency
            services or a qualified healthcare professional.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t bg-white py-6">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-slate-500">
          © 2026 LifeCare AI • Your Intelligent Health Companion
        </div>
      </footer>
    </main>
  );
}