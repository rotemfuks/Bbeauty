import { FunctionComponent, useContext, useEffect } from "react";
import BusinessCards from "./BusinessCards";
import { Button } from "react-bootstrap";
import { BsBuildingAdd } from "react-icons/bs";
import { LoginContext } from "../context/LoginContext";
import { useNavigate } from "react-router-dom";
import { CardContext } from "../context/CardContext";
interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const { user } = useContext(LoginContext);
  const navigate = useNavigate();
  const { cards } = useContext(CardContext);

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
