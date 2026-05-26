"use client";

import { useEffect, useState } from "react";

interface TypedTitleProps {
  strings: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
  className?: string;
}

export default function TypedTitle({
  strings,
  typingSpeed = 100,
  deletingSpeed = 50,
  pause = 1500,
  className = "",
}: TypedTitleProps) {
  const [display, setDisplay] = useState("");
  const [index, setIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const current = strings[index];
    if (typing) {
      if (display.length < current.length) {
        timeout = setTimeout(() => {
          setDisplay(current.slice(0, display.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => setTyping(false), pause);
      }
    } else {
      if (display.length > 0) {
        timeout = setTimeout(() => {
          setDisplay(current.slice(0, display.length - 1));
        }, deletingSpeed);
      } else {
        setIndex((index + 1) % strings.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [display, typing, index, strings, typingSpeed, deletingSpeed, pause]);

  return (
    <span className={className}>
      {display}
      <span className="border-r-2 border-current animate-caret-blink inline-block ml-0.5" />
    </span>
  );
}
