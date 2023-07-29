import { FunctionComponent, useContext, useEffect, useState } from "react";
import { Card } from "../interfaces/Card";
import BusinessCards from "./BusinessCards";
import { FavoriteContext } from "../context/FavoritesContext";
import { getCards } from "../services/cardService";

interface FavoritesProps {}

const Favorites: FunctionComponent<FavoritesProps> = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const { favoriteCardIds } = useContext(FavoriteContext);

  useEffect(() => {
    getCards().then((res) => {
      setCards(res.data);
    });
  }, []);

  return (
    <>
      <h1> favorites</h1>
      <BusinessCards
        cards={cards.filter((card) => card.id && favoriteCardIds.includes(card.id))}
      />
    </>
  );
};

export default Favorites;
