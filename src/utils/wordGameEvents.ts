import { actionListener } from './MyActionListener';
import axios from 'axios';
import {
  ADD_CHARACTER,
  CHECK_WORD,
  REMOVE_CHARACTER,
  MAX_LENGTH,
} from '../constants/constants';

export const registerWordGameEvents = (
  word: string,
  setWord: React.Dispatch<React.SetStateAction<string>>,
  setBorderColor: React.Dispatch<React.SetStateAction<string>>
) => {
  const handleAddCharacter = (character: string) => {
    if (word.length < MAX_LENGTH) {
      setWord((prev) => prev + character);
    }
  };

  const handleRemoveCharacter = () => {
    if (word.length > 0) {
      setWord((prev) => prev.slice(0, -1));
      setBorderColor('black');
    }
  };

  const handleCheckWord = async () => {
    if (word.length !== MAX_LENGTH) {
      return setBorderColor('red');
    }

    const wordToCheck = word.toLowerCase();

    try {
      await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${wordToCheck}`
      );

      setBorderColor('green');
    } catch (error) {
      console.error('Error checking word:', error);
      setBorderColor('red');
    }
  };

  actionListener.registerListener(ADD_CHARACTER, handleAddCharacter);
  actionListener.registerListener(REMOVE_CHARACTER, handleRemoveCharacter);
  actionListener.registerListener(CHECK_WORD, handleCheckWord);

  return () => {
    actionListener.removeListener(ADD_CHARACTER);
    actionListener.removeListener(REMOVE_CHARACTER);
    actionListener.removeListener(CHECK_WORD);
  };
};
