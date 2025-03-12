import { FC } from 'react';
import CharacterButton from './CharacterButton';

interface IKeyboardRowProps {
  characters: string[];
  onCharacterClick: (character: string) => void;
}

const KeyboardRow: FC<IKeyboardRowProps> = ({
  characters,
  onCharacterClick,
}) => {
  return (
    <div className="flex gap-1 justify-center">
      {characters.map((char, index) => (
        <CharacterButton
          key={index}
          character={char}
          onClick={onCharacterClick}
        />
      ))}
    </div>
  );
};

export default KeyboardRow;
