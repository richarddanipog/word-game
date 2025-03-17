import { FC, memo } from 'react';

interface ICharacterButtonProps {
  character: string;
  onClick: (character: string) => void;
}

const CharacterButton: FC<ICharacterButtonProps> = ({ character, onClick }) => {
  const isSpecialKey = character === 'ENTER' || character === '⌫';

  return (
    <button
      className={`min-w-10 h-12 bg-gray-200 rounded px-3 font-semibold flex items-center justify-center uppercase hover:bg-gray-300 cursor-pointer ${
        isSpecialKey ? 'px-4 mx-1' : ''
      }`}
      onClick={() => onClick(character)}
    >
      {character}
    </button>
  );
};

export default memo(CharacterButton);
