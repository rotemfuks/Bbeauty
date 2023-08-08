import { FunctionComponent, useEffect, useState } from "react";
import { Card } from "../interfaces/Card";
import { getCardDetails } from "../services/cardService";
import styles from "../styles/Business.module.scss";
import { BsFillTelephoneFill } from "react-icons/bs";

interface BusinessPageProps {}

const BusinessPage: FunctionComponent<BusinessPageProps> = () => {
  const [cardDetails, setCardDetails] = useState<Card>();

  useEffect(() => {
    const url = new URL(window.location.href);
    const queryParams = new URLSearchParams(url.search);
    const cardIdParam = queryParams.get("cardId");

    if (cardIdParam) {
      getCardDetails(Number(cardIdParam)).then((res) => {
        setCardDetails(res.data);
      });
    }
  }, []);

  return (
    <div className={styles.all}>
      <section>
        <div className={styles.aboutus}>
          <h1>{cardDetails?.name}</h1>
          <div className={styles.wrapper}>
            <div className={styles.content}>
              <p className={styles.description}>{cardDetails?.description}</p>
              <p className={styles.longDescription}>
                {cardDetails?.longDescription}
              </p>
              <p className={styles.AddressEmail}>Email: {cardDetails?.email}</p>
              <p className={styles.AddressEmail}>
                Address: {cardDetails?.state}, {cardDetails?.address},{" "}
                {cardDetails?.zipCode}.
              </p>
              <a href={`tel:${cardDetails?.phone}`} className={styles.phone}>
                <BsFillTelephoneFill /> Phone: {cardDetails?.phone}
              </a>
            </div>
            <div className={styles.imagesection}>
              <img src={cardDetails?.image} alt={cardDetails?.alt} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export { BusinessPage };
