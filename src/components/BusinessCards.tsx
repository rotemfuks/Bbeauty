import React, { useContext } from "react";
import { Button, Card as CardBs, Col, Row } from "react-bootstrap";
import styles from "./BusinessCards.module.scss";
import { Card } from "../interfaces/Card";
import {
  BsFillTrashFill,
  BsFillHeartFill,
  BsFillPencilFill,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { LoginContext } from "../context/LoginContext";
import { deleteCard } from "../services/cardService";
import { useNavigate } from "react-router-dom";

interface BusinessCardsProps {
  cards: Card[];
}

const BusinessCards: React.FC<BusinessCardsProps> = ({ cards }) => {
  // const { user } = useContext(LoginContext);
  const navigate = useNavigate();

  const user = {
    name: "rotem fuks",
    email: "bar74064@gmail.com",
    phone: "0547424641",
    password: "123456789",
    isAdmin: true,
    isbusiness: true,
    id: 1,
  };

  const onEditClick = (cardId: number) => {
    const queryParams = new URLSearchParams();
    queryParams.append("cardId", String(cardId));

    navigate({
      pathname: "/card-form",
      search: queryParams.toString(),
    });
  };

  const onDeleteClick = (cardId: number) => {
    deleteCard(cardId);
  };

  const onFavoriteClick = () => {};

  return (
    <div className={styles.cardsContainer}>
      <Row className={styles.businessCardsRow}>
        {cards.map((business, index) => (
          <Col key={index} xs={12} sm={6} md={4}>
            <CardBs className={styles.businessCard}>
              <CardBs.Body>
                <div className={styles.imageContainer}>
                  <img
                    src={business.image}
                    className={styles.cardImage}
                    alt={business.name}
                  />
                </div>
                <CardBs.Title className={styles.cardTitle}>
                  {business.name}
                </CardBs.Title>
                <CardBs.Text className={styles.cardDescription}>
                  {business.description}
                </CardBs.Text>
                <CardBs.Text className={styles.cardPhone}>
                  Phone: {business.phone}
                </CardBs.Text>
                <CardBs.Text className={styles.cardAdress}>
                  Adress: {business.address}
                </CardBs.Text>
              </CardBs.Body>

              <CardBs.Footer className={styles.cardActions}>
                {user?.isAdmin && (
                  <>
                    <Button
                      onClick={() => business.id && onEditClick(business.id)}
                    >
                      <BsFillPencilFill />
                    </Button>
                    <Button
                      onClick={() => business.id && onDeleteClick(business.id)}
                    >
                      <BsFillTrashFill />
                    </Button>
                  </>
                )}
                {user && (
                  <Button onClick={onFavoriteClick}>
                    <BsFillHeartFill />
                  </Button>
                )}
                <Button>
                  <a href={`tel:${business.phone}`}>
                    <BsFillTelephoneFill />
                  </a>
                </Button>
              </CardBs.Footer>
            </CardBs>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BusinessCards;
