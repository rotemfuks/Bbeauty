import { FunctionComponent, useEffect, useState } from "react";
import { Card } from "../interfaces/Card";
import { getCardDetails } from "../services/cardService";

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
    <>
      <div>Hi</div>
      {JSON.stringify(cardDetails)}
      {cardDetails && (
        <div>
          <div>Name:</div>
          <div>{cardDetails.name}</div>
        </div>
      )}
    </>
  );
};

export { BusinessPage };
