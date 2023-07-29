import React, { useContext } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import styles from "./BusinessCards.module.scss";
import { Business } from "../interfaces/Business";
import {
  BsFillTrashFill,
  BsFillHeartFill,
  BsFillPencilFill,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { LoginContext } from "../context/LoginContext";
import { deleteCard } from "../services/cardService";

interface BusinessCardsProps {
  businesses: Business[];
}

const BusinessCards: React.FC<BusinessCardsProps> = ({ businesses }) => {
  // const { user } = useContext(LoginContext);

  const user = {
    name: "rotem fuks",
    email: "bar74064@gmail.com",
    phone: "0547424641",
    password: "123456789",
    isAdmin: true,
    isbusiness: true,
    id: 1,
  };

  const onEditClick = () => {};

  const onDeleteClick = (cardId: number) => {
    deleteCard(cardId);
  };

  const onFavoriteClick = () => {};

  const onPhoneClick = () => {};

  return (
    <div className={styles.cardsContainer}>
      <Row className={styles.businessCardsRow}>
        {businesses.map((business, index) => (
          <Col key={index} xs={12} sm={6} md={4}>
            <Card className={styles.businessCard}>
              <Card.Body>
                <div className={styles.imageContainer}>
                  <img
                    src={business.image}
                    className={styles.cardImage}
                    alt={business.name}
                  />
                </div>
                <Card.Title className={styles.cardTitle}>
                  {business.name}
                </Card.Title>
                <Card.Text className={styles.cardDescription}>
                  {business.description}
                </Card.Text>
                <Card.Text className={styles.cardPhone}>
                  Phone: {business.phone}
                </Card.Text>
                <Card.Text className={styles.cardAdress}>
                  Adress: {business.address}
                </Card.Text>
              </Card.Body>

              <Card.Footer className={styles.cardActions}>
                {user?.isAdmin && (
                  <>
                    <Button onClick={onEditClick}>
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
                <Button onClick={onPhoneClick}>
                  <BsFillTelephoneFill />
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BusinessCards;
