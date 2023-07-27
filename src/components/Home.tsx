import { FunctionComponent } from "react";
import BusinessCards from "./BusinessCards";

const businessesData = [
  {
    name: "Glamour Beauty Salon",
    description: "Providing top-notch beauty services for all occasions.",
    phone: "123-456-7890",
    address: "Hakishon 72 Tel aviv",
  },
  {
    name: "Radiant Skincare Clinic",
    description: "Your destination for flawless and healthy skin.",
    phone: "987-654-3210",
    address: "Hakishon 54 Tel aviv",
  },
  {
    name: "Chic Hair Studio",
    description: "Transforming your hair with modern and trendy styles.",
    phone: "555-555-5555",
    address: "Hakishon 76342 Tel aviv",
  },
];

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
      <BusinessCards businesses={businessesData} />
    </>
  );
};

export default Home;
