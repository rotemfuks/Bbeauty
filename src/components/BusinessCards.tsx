import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import styles from "./BusinessCards.module.scss";
import { Business } from "../interfaces/Business";

interface BusinessCardsProps {
  businesses: Business[];
}

const BusinessCards: React.FC<BusinessCardsProps> = ({ businesses }) => {
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
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BusinessCards;
