import { FunctionComponent, useEffect, useState } from "react";
import BusinessCards from "./BusinessCards";
import { Business } from "../interfaces/Business";
import { getCards } from "../services/cardService";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const [businesses, setBusinesses] = useState<Business[]>([]);

  useEffect(() => {
    getCards().then((res) => {
      setBusinesses(res.data)
    });
  }, []);

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
      <BusinessCards businesses={businesses} />
    </>
  );
};

export default Home;
function setState<T>(): [any, any] {
  throw new Error("Function not implemented.");
}

