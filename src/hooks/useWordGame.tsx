import { useState, useEffect } from 'react';
import { registerWordGameEvents } from '../utils/wordGameEvents';

export const useWordGame = () => {
  const [word, setWord] = useState<string>('');
  const [borderColor, setBorderColor] = useState<string>('black');

  useEffect(() => {
    const unregister = registerWordGameEvents(word, setWord, setBorderColor);

    return () => {
      unregister();
    };
  }, [word]);

  return { word, borderColor };
};
