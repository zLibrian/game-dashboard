import game1 from './assets/game1.jpg';
import game2 from './assets/game2.jpg';
import game3 from './assets/game3.jpg';

export type Game = {
  image: string;
  name: string;
  category: string;
  company: string;
};

export type MyGame = Game & {
  install: boolean;
};

export const gameData: Game[] = [
  {
    image: game1,
    name: 'Fortnite',
    category: 'Battle Royale',
    company: 'Epic Games',
  },
  {
    image: game2,
    name: 'New World',
    category: 'MMORPG',
    company: 'Amazon Games',
  },
  {
    image: game3,
    name: 'Lost Ark',
    category: 'MMORPG',
    company: 'Webzen',
  },
];

export const favoriteGames: MyGame[] = [
  {
    image: game1,
    name: 'Lorem Ipsum Game 1',
    category: 'RPG',
    install: true,
    company: 'Lorem Ipsum',
  },
  {
    image: game2,
    name: 'Lorem Ipsum Game 2',
    category: 'FPS',
    install: false,
    company: 'Lorem Ipsum',
  },
  {
    image: game3,
    name: 'Lorem Ipsum Game 3',
    category: 'Adventure',
    install: false,
    company: 'Lorem Ipsum',
  },
];
