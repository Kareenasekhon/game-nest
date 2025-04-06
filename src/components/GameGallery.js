import React, { useState } from 'react';

// Correct import paths for images inside the components/images folder
import i2048 from './images/2048.gif';
import memory from './images/memory.jpeg';
import sliding from './images/sliding.png';
import whackMole from './images/whack-mole.jpg';

const GameCard = ({ game, isActive }) => (
  <div
    className="game-card"
    style={{
      transform: `translateX(${isActive ? 0 : 100}%)`,
      opacity: isActive ? 1 : 0,
      pointerEvents: isActive ? 'auto' : 'none'
    }}
  >
    <img src={game.image} alt={game.title} />
    <h2>{game.title}</h2>
    <p>{game.description}</p>
    <a href={game.link}>Play Now</a>
  </div>
);

const GameGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const games = [
    { title: "2048", description: "Merge tiles to reach 2048 in this addictive puzzle game!", image: i2048, link: "https://monicatvera.github.io/2048/" },
    { title: "Whack-a-Mole", description: "Test your reflexes in this classic arcade game!", image: whackMole, link: "https://whack-the-mole-game.vercel.app/" },
    { title: "Sliding Puzzle", description: "Arrange the tiles in the correct order to win!", image: sliding, link: "https://sliding-puzzle-game-red.vercel.app/" },
    { title: "Memory Game", description: "Match pairs of cards in this memory challenge!", image: memory, link: "https://flip-memory-game-nu.vercel.app/" }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === games.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? games.length - 1 : prevIndex - 1));
  };

  return (
    <div className="gallery-container" id="games">
      {games.map((game, index) => (
        <GameCard key={index} game={game} isActive={index === currentIndex} />
      ))}
      
      <button className="gallery-btn prev-btn" onClick={prevSlide}>❮</button>
      <button className="gallery-btn next-btn" onClick={nextSlide}>❯</button>
    </div>
  );
};

export default GameGallery;
