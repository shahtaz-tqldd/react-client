import React from "react";

interface GreetingsProps {
  name: string;
}

const Greetings: React.FC<GreetingsProps> = ({ name }) => {
  const getGreeting = (): string => {
    const hour = new Date().getHours();
    if (hour < 12) {
      return "Good Morning";
    } else if (hour < 18) {
      return "Good Afternoon";
    } else {
      return "Good Day";
    }
  };

  return (
    <h3>
      {getGreeting()}, {name}!
    </h3>
  );
};

export default Greetings;
