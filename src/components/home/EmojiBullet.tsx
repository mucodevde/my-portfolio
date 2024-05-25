import React from "react";

interface EmojiButtonProps {
  emoji: string,
  text: string,
}

const EmojiBullet: React.FC<EmojiButtonProps> = ({ emoji, text }) => {
  return (
    <li className="flex items-center justify-center text-xs lg:text-md cursor-default">
      <span
        aria-label="emoji"
        role="img"
        className="hidden sm:flex sm:mr-2 text-lg"
      >
        {emoji}
      </span>
      {text}
    </li>
  )
}

export default EmojiBullet;