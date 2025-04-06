import React from 'react';

const Header = () => {
  const scrollToGames = (e) => {
    e.preventDefault();
    document.getElementById('games').scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="header fade-in">
      <h1>GameNest</h1>
      <div className="tagline">Dive into Ultimate Games Fun!</div>
      <p>Your one-stop destination for the most exciting gaming experiences</p>
      <a href="#games" className="cta-button" onClick={scrollToGames}>Explore Games</a>
    </header>
  );
};

export default Header;
