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
import { FavoriteContext } from "../context/FavoritesContext";

interface BusinessCardsProps {
  cards: Card[];
}

const BusinessCards: React.FC<BusinessCardsProps> = ({ cards }) => {
  // const { user } = useContext(LoginContext);
  const navigate = useNavigate();
  const { addToFavorite, removeFromFavorite, favoriteCardIds } = useContext(FavoriteContext);

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

  const onFavoriteClick = (cardId: number) => {
    const isFavorite = favoriteCardIds.includes(cardId);
    if (isFavorite) {
      removeFromFavorite(cardId)
    } else {
      addToFavorite(cardId);
    }
  };

  return (
    <div className={styles.cardsContainer}>
      <Row className={styles.businessCardsRow}>
        {cards.map((card, index) => (
          <Col key={index} xs={12} sm={6} md={4}>
            <CardBs className={styles.businessCard}>
              <CardBs.Body>
                <div className={styles.imageContainer}>
                  <img
                    src={card.image}
                    className={styles.cardImage}
                    alt={card.name}
                  />
                </div>
                <CardBs.Title className={styles.cardTitle}>
                  {card.name}
                </CardBs.Title>
                <CardBs.Text className={styles.cardDescription}>
                  {card.description}
                </CardBs.Text>
                <CardBs.Text className={styles.cardPhone}>
                  Phone: {card.phone}
                </CardBs.Text>
                <CardBs.Text className={styles.cardAdress}>
                  Adress: {card.address}
                </CardBs.Text>
              </CardBs.Body>

              <CardBs.Footer className={styles.cardActions}>
                {user?.isAdmin && (
                  <>
                    <Button onClick={() => card.id && onEditClick(card.id)}>
                      <BsFillPencilFill />
                    </Button>
                    <Button onClick={() => card.id && onDeleteClick(card.id)}>
                      <BsFillTrashFill />
                    </Button>
                  </>
                )}
                {user && (
                  <Button
                    onClick={() => card.id && onFavoriteClick(card.id)}
                    active={!!card.id && favoriteCardIds.includes(card.id)}
                  >
                    <BsFillHeartFill />
                  </Button>
                )}
                <Button>
                  <a href={`tel:${card.phone}`}>
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
