"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Send, Sparkles, Paperclip } from "lucide-react";
import { cn } from "@/lib/utils";

type Message = {
  id: string;
  from: "bot" | "user";
  text: string;
  time: string;
};

const QUICK_REPLIES = [
  "Schedule a viewing",
  "Available units",
  "Pricing & financing",
  "Tell me about the location",
];

const SEED_MESSAGES: Message[] = [
  {
    id: "m1",
    from: "bot",
    text:
      "Good afternoon — I’m your Aleevia Carter concierge. I can help with viewings, unit availability, or financing.",
    time: "Just now",
  },
  {
    id: "m2",
    from: "bot",
    text: "How can I help you today?",
    time: "Just now",
  },
];

function nowLabel() {
  return new Date().toLocaleTimeString("en-PH", {
    hour: "numeric",
    minute: "2-digit",
  });
}

export function ConciergeChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>(SEED_MESSAGES);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, open]);

  function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((prev) => [
      ...prev,
      {
        id: `m${Date.now()}`,
        from: "user",
        text: trimmed,
        time: nowLabel(),
      },
    ]);
    setInput("");
  }

  return (
    <>
      {/* Floating Action Button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            key="fab"
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={() => setOpen(true)}
            aria-label="Open concierge chat"
            className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40 group flex items-center gap-3 bg-foreground text-white px-5 py-3.5 shadow-xl shadow-zinc-400/40 hover:bg-foreground/90 transition-colors"
          >
            <span className="relative flex items-center justify-center">
              <MessageCircle className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" />
              </span>
            </span>
            <span className="text-[0.7rem] tracking-[0.18em] uppercase font-medium">
              Concierge
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed z-50 bg-white border border-zinc-200 shadow-2xl shadow-zinc-400/30 flex flex-col overflow-hidden inset-x-3 bottom-3 top-20 sm:inset-auto sm:bottom-6 sm:right-6 sm:top-auto sm:w-[380px] sm:h-[600px]"
            role="dialog"
            aria-label="Aleevia Carter concierge chat"
          >
            {/* Header */}
            <header className="flex-none border-b border-zinc-200 px-5 py-4 bg-white">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="relative flex-none w-10 h-10 bg-foreground text-white flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                    <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-heading text-sm font-semibold text-foreground truncate">
                      Aleevia Concierge
                    </p>
                    <p className="text-[0.65rem] tracking-wider uppercase text-emerald-600 font-medium">
                      Online · Replies in &lt;5 min
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close chat"
                  className="flex-none w-8 h-8 flex items-center justify-center text-foreground/60 hover:text-foreground hover:bg-zinc-100 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </header>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-5 py-6 space-y-4 bg-zinc-50/60"
            >
              <p className="text-center text-[0.6rem] tracking-[0.25em] uppercase text-foreground/40 mb-2">
                — Today —
              </p>

              {messages.map((msg) => (
                <MessageBubble key={msg.id} message={msg} />
              ))}

              {/* Unit recommendation preview card from bot */}
              <div className="flex justify-start">
                <div className="max-w-[85%] space-y-2">
                  <p className="text-[0.65rem] uppercase tracking-wider text-foreground/50">
                    Suggested for you
                  </p>
                  <div className="bg-white border border-zinc-200 overflow-hidden">
                    <div className="aspect-4/3 bg-zinc-100 relative overflow-hidden">
                      <Image
                        src="/assets/interior/unit-7/bedroom.png"
                        alt="Two-Bedroom Loft — bedroom interior"
                        fill
                        sizes="(max-width: 640px) 90vw, 320px"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-[0.6rem] tracking-[0.2em] uppercase text-muted-foreground mb-1">
                        Unit 07 · Mezzanine
                      </p>
                      <p className="font-heading text-base font-medium text-foreground mb-1">
                        Two-Bedroom Loft
                      </p>
                      <p className="text-xs text-muted-foreground mb-3">
                        From ₱18.4M · 86 sqm
                      </p>
                      <button className="text-[0.65rem] tracking-[0.18em] uppercase text-foreground border-b border-foreground pb-0.5 hover:opacity-60 transition-opacity">
                        View details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick replies */}
            <div className="flex-none border-t border-zinc-200 px-5 py-3 bg-white">
              <div className="flex gap-2 overflow-x-auto -mx-1 px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {QUICK_REPLIES.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => {
                      sendMessage(reply);
                      inputRef.current?.focus();
                    }}
                    className="flex-none border border-zinc-300 text-foreground/80 hover:text-foreground hover:border-foreground/50 px-3 py-1.5 text-xs whitespace-nowrap transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(input);
              }}
              className="flex-none flex items-center gap-2 border-t border-zinc-200 px-3 py-3 bg-white"
            >
              <button
                type="button"
                aria-label="Attach file"
                className="flex-none w-9 h-9 flex items-center justify-center text-foreground/50 hover:text-foreground hover:bg-zinc-100 transition-colors"
              >
                <Paperclip className="w-4 h-4" />
              </button>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message…"
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-foreground/40 outline-none px-1"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                aria-label="Send message"
                className={cn(
                  "flex-none w-9 h-9 flex items-center justify-center transition-colors",
                  input.trim()
                    ? "bg-foreground text-white hover:bg-foreground/90"
                    : "bg-zinc-100 text-foreground/30 cursor-not-allowed"
                )}
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            <p className="flex-none text-[0.6rem] text-center text-foreground/40 py-2 bg-white border-t border-zinc-100">
              Powered by Aleevia Carter Property Specialists
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MessageBubble({ message }: { message: Message }) {
  const isBot = message.from === "bot";
  return (
    <div className={cn("flex", isBot ? "justify-start" : "justify-end")}>
      <div
        className={cn(
          "max-w-[85%] px-4 py-2.5 text-sm leading-relaxed",
          isBot
            ? "bg-white border border-zinc-200 text-foreground"
            : "bg-foreground text-white"
        )}
      >
        <p>{message.text}</p>
        <p
          className={cn(
            "text-[0.6rem] mt-1.5 tracking-wider uppercase",
            isBot ? "text-foreground/40" : "text-white/55"
          )}
        >
          {message.time}
        </p>
      </div>
    </div>
  );
}
