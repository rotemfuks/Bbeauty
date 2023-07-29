import { FunctionComponent, useContext } from "react";
import BusinessCards from "./BusinessCards";
import { FavoriteContext } from "../context/FavoritesContext";
import { CardContext } from "../context/CardContext";

interface FavoritesProps {}

const Favorites: FunctionComponent<FavoritesProps> = () => {
  const { favoriteCardIds } = useContext(FavoriteContext);
  const { cards } = useContext(CardContext);

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
