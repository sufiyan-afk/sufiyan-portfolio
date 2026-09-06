import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, Send, X, Sparkles } from "lucide-react";
import ReactMarkdown from "react-markdown";

function PortfolioAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Hi! I'm Sufiyan's AI assistant. Ask me anything about his skills, projects, education, development journey, or career direction.",
    },
  ]);

  const handleSend = async () => {
    const trimmedMessage = message.trim();

    if (!trimmedMessage || isLoading) return;

    setMessages((previous) => [
      ...previous,
      {
        role: "user",
        text: trimmedMessage,
      },
    ]);

    setMessage("");
    setIsLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/portfolio-ai/chat/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: trimmedMessage,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setMessages((previous) => [
        ...previous,
        {
          role: "ai",
          text: data.reply.replace(/\u00a0/g, " "),
        },
      ]);
    } catch (error) {
      console.error("Portfolio AI error:", error);

      setMessages((previous) => [
        ...previous,
        {
          role: "ai",
          text: "Sorry, I couldn't connect to the AI right now. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating AI Button */}
      <motion.button
        type="button"
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-5 right-5 z-[90] flex items-center gap-2 rounded-2xl border border-violet-400/20 bg-[#0b0e20]/90 px-4 py-3 text-xs font-medium text-white shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all hover:border-violet-400/40 sm:bottom-6 sm:right-6"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
          <Sparkles size={15} />
        </span>

        <span>Ask Sufiyan AI</span>
      </motion.button>

      {/* AI Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-5 right-5 z-[100] flex h-[min(600px,calc(100vh-40px))] w-[min(390px,calc(100vw-40px))] flex-col overflow-hidden rounded-[24px] border border-white/[0.09] bg-[#080b1b]/95 shadow-[0_20px_80px_rgba(0,0,0,0.55)] backdrop-blur-2xl sm:bottom-6 sm:right-6"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
                  <Bot size={18} />
                </div>

                <div>
                  <div className="text-sm font-semibold text-white">
                    Sufiyan AI
                  </div>

                  <div className="mt-0.5 flex items-center gap-1.5 text-[10px] text-white/35">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Portfolio Assistant
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close AI assistant"
                className="flex h-8 w-8 items-center justify-center rounded-lg text-white/40 transition-colors hover:bg-white/[0.06] hover:text-white"
              >
                <X size={17} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 space-y-4 overflow-y-auto p-4">
              {messages.map((item, index) => (
                <div
                  key={index}
                  className={`flex ${
                    item.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[82%] rounded-2xl px-3.5 py-3 text-xs leading-5 ${
                      item.role === "user"
                        ? "rounded-br-md bg-violet-600 text-white"
                        : "rounded-bl-md border border-white/[0.07] bg-white/[0.035] text-white/65"
                    }`}
                  >
                    {item.role === "ai" ? (
                      <ReactMarkdown
                        components={{
                          a: ({ href, children }) => (
                            <a
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-violet-300 underline underline-offset-2 transition-colors hover:text-violet-200"
                            >
                              {children}
                            </a>
                          ),
                          p: ({ children }) => (
                            <p className="mb-2 last:mb-0">{children}</p>
                          ),

                          strong: ({ children }) => (
                            <strong className="font-semibold text-white">
                              {children}
                            </strong>
                          ),

                          ul: ({ children }) => (
                            <ul className="mb-2 list-disc space-y-1 pl-4">
                              {children}
                            </ul>
                          ),

                          ol: ({ children }) => (
                            <ol className="mb-2 list-decimal space-y-1 pl-4">
                              {children}
                            </ol>
                          ),

                          li: ({ children }) => <li>{children}</li>,

                          h1: ({ children }) => (
                            <h1 className="mb-2 text-sm font-semibold text-white">
                              {children}
                            </h1>
                          ),

                          h2: ({ children }) => (
                            <h2 className="mb-2 text-sm font-semibold text-white">
                              {children}
                            </h2>
                          ),

                          h3: ({ children }) => (
                            <h3 className="mb-2 text-xs font-semibold text-white">
                              {children}
                            </h3>
                          ),
                        }}
                      >
                        {item.text}
                      </ReactMarkdown>
                    ) : (
                      item.text
                    )}
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="rounded-2xl rounded-bl-md border border-white/[0.07] bg-white/[0.035] px-4 py-3">
                    <div className="flex items-center gap-1">
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/40 [animation-delay:-0.3s]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/40 [animation-delay:-0.15s]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/40" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="border-t border-white/[0.07] p-3">
              <div className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.025] p-1.5">
                <input
                  type="text"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  onKeyDown={handleKeyDown}
                  disabled={isLoading}
                  placeholder={
                    isLoading
                      ? "Sufiyan AI is thinking..."
                      : "Ask about Sufiyan..."
                  }
                  className="min-w-0 flex-1 bg-transparent px-2 text-xs text-white outline-none placeholder:text-white/25 disabled:cursor-not-allowed disabled:opacity-50"
                />

                <button
                  type="button"
                  onClick={handleSend}
                  disabled={!message.trim() || isLoading}
                  aria-label="Send message"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-600 text-white transition-all hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <Send size={15} />
                </button>
              </div>

              <p className="mt-2 text-center text-[9px] text-white/20">
                AI assistant • Portfolio information only
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default PortfolioAI;