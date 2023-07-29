import { FunctionComponent, useContext, useEffect, useState } from "react";
import { Card } from "../interfaces/Card";
import BusinessCards from "./BusinessCards";
import { getCards } from "../services/cardService";
import { LoginContext } from "../context/LoginContext";

interface CardsProps {}

const MyCards: FunctionComponent<CardsProps> = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const { user } = useContext(LoginContext);

  useEffect(() => {
    getCards().then((res) => {
      setCards(res.data);
    });
  }, []);

  return (
    <>
      <h1>My Cards</h1>
      <BusinessCards
        cards={cards.filter(
          (card) => card.userId && user && user.id === card.userId
        )}
      />
    </>
  );
};

export default MyCards;
