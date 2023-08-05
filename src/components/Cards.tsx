import { FunctionComponent, useContext } from "react";
import BusinessCards from "./BusinessCards";
import { LoginContext } from "../context/LoginContext";
import { CardContext } from "../context/CardContext";
import styles from "./Favorites.module.scss";
interface CardsProps {}

const MyCards: FunctionComponent<CardsProps> = () => {
  const { user } = useContext(LoginContext);
  const { cards } = useContext(CardContext);

  return (
    <>
      <h1 className={styles.title}>My Cards</h1>
      <BusinessCards
        cards={cards.filter(
          (card) => card.userId && user && user.id === card.userId
        )}
      />
    </>
  );
};

export default MyCards;
