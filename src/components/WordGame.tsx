import { FC } from 'react';
import CharacterSquare from './CharacterSquare';
import KeyboardRow from './KeyboardRow';
import CharacterButton from './CharacterButton';
import { actionListener } from '../utils/MyActionListener';
import { useWordGame } from '../hooks/useWordGame';
import {
  ADD_CHARACTER,
  CHECK_WORD,
  REMOVE_CHARACTER,
  MAX_LENGTH,
  TOP_ROW,
  MIDDLE_ROW,
  LOWER_ROW,
} from '../constants/constants';

const WordGame: FC = () => {
  const { word, borderColor } = useWordGame();
  const squares = Array(MAX_LENGTH).fill(null);

  const handleCharacterClick = (character: string): void => {
    actionListener.emit(ADD_CHARACTER, character);
  };

  const handleBackspace = (): void => {
    actionListener.emit(REMOVE_CHARACTER);
  };

  const handleEnter = (): void => {
    actionListener.emit(CHECK_WORD);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="flex gap-2 mb-8">
        {squares.map((_, index) => (
          <CharacterSquare
            key={index}
            character={word[index] || ''}
            borderColor={borderColor}
          />
        ))}
      </div>

      <div className="flex flex-col gap-2 w-full max-w-lg">
        <KeyboardRow
          characters={TOP_ROW}
          onCharacterClick={handleCharacterClick}
        />
        <div className="flex justify-center">
          <KeyboardRow
            characters={MIDDLE_ROW}
            onCharacterClick={handleCharacterClick}
          />
        </div>
        <div className="flex justify-center items-center">
          <CharacterButton character="ENTER" onClick={handleEnter} />
          <KeyboardRow
            characters={LOWER_ROW}
            onCharacterClick={handleCharacterClick}
          />
          <CharacterButton character="⌫" onClick={handleBackspace} />
        </div>
      </div>
    </div>
  );
};

export default WordGame;
