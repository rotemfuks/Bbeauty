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

interface BusinessCardsProps {
  businesses: Business[];
}

const BusinessCards: React.FC<BusinessCardsProps> = ({ businesses }) => {
  const { user } = useContext(LoginContext);

  const onEditClick = () => {};

  const onDeleteClick = () => {};

  const onFavoriteClick = () => {};

  const onPhoneClick = () => {};

  return (
    <div className={styles.cardsContainer}>
      <Row className={styles.businessCardsRow}>
        {businesses.map((business, index) => (
          <Col key={index} xs={12} sm={6} md={4}>
            <Card className={styles.businessCard}>
              <Card.Body>
                <Card.Title>{business.name}</Card.Title>
                <Card.Text>{business.description}</Card.Text>
                <Card.Text>Phone: {business.phone}</Card.Text>
                <Card.Text>Adress: {business.address}</Card.Text>
              </Card.Body>

              <Card.Footer>
                {user?.isAdmin && (
                  <>
                    <Button onClick={onEditClick}>
                      <BsFillPencilFill />
                    </Button>
                    <Button onClick={onDeleteClick}>
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
