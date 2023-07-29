import React, { createContext, useState } from "react";
import { Card } from "../interfaces/Card";
import { getCards } from "../services/cardService";

type CardContextType = {
  cards: Card[];
  loadCards: () => void;
};

const intialValue: CardContextType = {
  cards: [],
  loadCards: () => {},
};

const CardContext = createContext<CardContextType>(intialValue);

const CardProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [cards, setCards] = useState<Card[]>([]);

  const loadCards = () => {
    getCards().then((res) => {
      setCards(res.data);
    });
  };

  return (
    <CardContext.Provider value={{ cards, loadCards }}>
      {children}
    </CardContext.Provider>
  );
};

export { CardProvider, CardContext };
