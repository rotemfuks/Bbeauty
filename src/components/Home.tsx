import { FunctionComponent } from "react";
import BusinessCards from "./BusinessCards";


interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
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
      <BusinessCards businesses={[]} />
    </>
  );
};

export default Home;
