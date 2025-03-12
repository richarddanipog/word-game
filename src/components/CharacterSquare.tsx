import { FC } from 'react';

interface ICharacterSquareProps {
  character: string;
  borderColor: string;
}

const CharacterSquare: FC<ICharacterSquareProps> = ({
  character,
  borderColor,
}) => {
  return (
    <div
      className="w-16 h-16 flex items-center justify-center text-2xl font-bold uppercase border-3 rounded"
      style={{ borderColor }}
    >
      {character}
    </div>
  );
};

export default CharacterSquare;
