import React from 'react';

const FeatureCard = ({ icon, title, description }) => (
  <div className="feature-card">
    <div className="feature-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const Features = () => {
  const features = [
    { icon: "🎮", title: "Multiple Games", description: "Access a variety of exciting games in one place" },
    { icon: "🌐", title: "Play Anywhere", description: "Play your favorite games anytime, anywhere" },
    { icon: "👨‍👩‍👧‍👦", title: "Fun for All Ages", description: "Games suitable for everyone in the family" },
    { icon: "🏆", title: "Achievements", description: "Unlock rewards and track your gaming progress" }
  ];

  return (
    <div className="features fade-in">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  );
};

export default Features;
