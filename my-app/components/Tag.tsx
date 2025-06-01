import React from "react";

interface TagProps {
  text: string;
  color: string;
}

export default function Tag({ text, color }: TagProps) {
  return (
    <span className={`${color}`}>
      {text}
    </span>
  );
} 