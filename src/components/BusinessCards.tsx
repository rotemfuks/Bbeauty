import React, { useContext } from "react";
import { Button, Card as CardBs, Col, Row } from "react-bootstrap";
import styles from "../styles/BusinessCards.module.scss";
import { Card } from "../interfaces/Card";
import {
  BsFillTrashFill,
  BsFillHeartFill,
  BsFillPencilFill,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { LoginContext } from "../context/LoginContext";
import { deleteCard } from "../services/cardService";
import { Link, useNavigate } from "react-router-dom";
import { FavoriteContext } from "../context/FavoritesContext";
import { successMsg } from "../services/feedbacksService";

interface BusinessCardsProps {
  cards: Card[];
}

const BusinessCards: React.FC<BusinessCardsProps> = ({ cards }) => {
  const { user } = useContext(LoginContext);
  const navigate = useNavigate();
  const { addToFavorite, removeFromFavorite, favoriteCardIds } =
    useContext(FavoriteContext);

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
      removeFromFavorite(cardId);
    } else {
      addToFavorite(cardId);
      successMsg("Card added to favorites");
    }
  };

  return (
    <div className={styles.cardsContainer}>
      <Row className={styles.businessCardsRow}>
        {cards.map((card, index) => (
          <Col key={index} xs={12} sm={6} md={4} className={styles.padding}>
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
                  <Link to={`/business?cardId=${card.id}`}>{card.name}</Link>
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
                    <Button
                      onClick={() => card.id && onEditClick(card.id)}
                      className={styles.cardCrud}
                    >
                      <BsFillPencilFill />
                    </Button>
                    <Button
                      onClick={() => card.id && onDeleteClick(card.id)}
                      className={styles.cardCrud}
                    >
                      <BsFillTrashFill />
                    </Button>
                  </>
                )}
                {user && (
                  <Button
                    className={styles.cardCrud}
                    onClick={() => card.id && onFavoriteClick(card.id)}
                    active={!!card.id && favoriteCardIds.includes(card.id)}
                  >
                    <BsFillHeartFill />
                  </Button>
                )}
                <Button className={styles.cardCrud}>
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
