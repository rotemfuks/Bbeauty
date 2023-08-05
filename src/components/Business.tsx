import { FunctionComponent, useEffect, useState } from "react";
import { Card } from "../interfaces/Card";
import { getCardDetails } from "../services/cardService";
import styles from "./Business.module.scss";

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
    // <>
    //   <div>Hi</div>
    //   <h2>{cardDetails?.name}</h2>
    //   <p>{cardDetails?.description}</p>
    //   <img src={cardDetails?.image} alt={cardDetails?.alt} />
    // </>

    <div className={styles.all}>
      <section>
        <div className={styles.aboutus}>
          <h1>{cardDetails?.name}</h1>
          <div className={styles.wrapper}>
            <div className={styles.content}>
              <h3>
                It’s time to break out your beads and get in your last bites of
                king cake – Mardi Gras time is here.
              </h3>
              <p>
                Mardi Gras is French for Fat Tuesday. It’s also called Shrove
                Tuesday, Carnival Tuesday or Pancake Tuesday, depending on where
                the celebration is taking place. No matter the name, it’s a day
                of revelry that includes parades, parties and gastronomic
                indulgence before the Christian fasting season of Lent begins on
                Ash Wednesday (February 22 in 2023). It marks the last day of
                the Carnival season, basically a six-week period of partying
                around the globe.
              </p>
              <div className={styles.button}>
                <a href="about.html">read more</a>
              </div>
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
