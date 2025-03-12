# Word Game

A simple word game that checks if entered words are valid using a dictionary API.

## Overview

This project is a word game that allows users to enter words of a specific length. It validates the words against an online dictionary API and provides visual feedback based on whether the word is valid or not.

## Features

- Character input with length restrictions
- Real-time word validation using a dictionary API
- Visual feedback with color-coded borders (green for valid words, red for invalid)
- Event-based architecture using a custom action listener

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/word-game.git
   cd word-game
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## API Integration

This project uses the Free Dictionary API to validate words:

- API Endpoint: `https://api.dictionaryapi.dev/api/v2/entries/en/{word}`
- API Documentation: [https://dictionaryapi.dev/](https://dictionaryapi.dev/)

## Dependencies

- React
- Axios (for API requests)
- TypeScript

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Free Dictionary API](https://dictionaryapi.dev/) for providing word validation
