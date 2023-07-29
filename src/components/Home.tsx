import { FunctionComponent, useContext, useEffect, useState } from "react";
import BusinessCards from "./BusinessCards";
import { Card } from "../interfaces/Card";
import { getCards } from "../services/cardService";
import { Button } from "react-bootstrap";
import { BsBuildingAdd } from "react-icons/bs";
import { LoginContext } from "../context/LoginContext";
import { useNavigate } from "react-router-dom";
interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const { user } = useContext(LoginContext);
  const navigate = useNavigate();

  useEffect(() => {
    getCards().then((res) => {
      setCards(res.data);
    });
  }, []);

  const onClickAddCard = () => {
    navigate("/card-form");
  };

  return (
    <>
      <h1> Home Page</h1>
      <div>
        Welcome to our cosmetics business card showcase! Step into a world of
        stunning and captivating designs tailored exclusively for the cosmetics
        industry. Whether you're a makeup artist, hairstylist, beauty salon
        owner, or skincare specialist, our collection offers a diverse range of
        business cards that exude elegance and professionalism.
      </div>
      <BusinessCards cards={cards} />

      {user?.isBusiness && (
        <Button onClick={onClickAddCard}>
          <BsBuildingAdd /> Add card
        </Button>
      )}
    </>
  );
};

export default Home;
