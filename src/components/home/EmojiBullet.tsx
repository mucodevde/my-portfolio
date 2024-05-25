import React from "react";

interface EmojiButtonProps {
  emoji: string,
  text: string,
}

const EmojiBullet: React.FC<EmojiButtonProps> = ({ emoji, text }) => {
  return (
    <li className="text-base leading-tight cursor-default flex items-center">
      <span
        aria-label="emoji"
        role="img"
        className="mr-2 md:mr-4 text-lg"
      >
        {emoji}
      </span>
      {text}
    </li>
  )
}

export default EmojiBullet;