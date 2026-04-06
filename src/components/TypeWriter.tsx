"use client";

import { useState, useEffect } from "react";

interface TypeWriterProps {
  text: string;
  delay?: number;
  startDelay?: number;
  className?: string;
  cursor?: boolean;
  hideCursorOnDone?: boolean;
  onComplete?: () => void;
}

export function TypeWriter({
  text,
  delay = 50,
  startDelay = 0,
  className = "",
  cursor = true,
  hideCursorOnDone = true,
  onComplete,
}: TypeWriterProps) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(timeout);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length + 1));
      }, delay);
      return () => clearTimeout(timeout);
    } else {
      setDone(true);
      onComplete?.();
      if (hideCursorOnDone) {
        const timeout = setTimeout(() => setCursorVisible(false), 600);
        return () => clearTimeout(timeout);
      }
    }
  }, [displayed, started, text, delay, onComplete, hideCursorOnDone]);

  return (
    <span className={className}>
      {displayed}
      {cursor && cursorVisible && (
        <span
          className={`inline-block w-[2px] h-[1em] bg-[var(--color-accent)] ml-0.5 align-middle ${
            done ? "animate-pulse" : ""
          }`}
        />
      )}
    </span>
  );
}
