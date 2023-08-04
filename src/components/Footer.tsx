import { FunctionComponent, useContext } from "react";
import styles from "./Footer.module.scss";

import { LoginContext } from "../context/LoginContext";
import {
  BsFillFunnelFill,
  BsFillHeartFill,
  BsCardHeading,
} from "react-icons/bs";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  const { user, logout } = useContext(LoginContext);

  const navigate = useNavigate();

  const onLogoutClick = () => {
    logout();
    navigate("/login");
  };
  return (
    <footer className={styles.footer}>
      <div className={styles.containerfooter}>
        <div className={styles.rowfooter}>
          <div className={styles.footerCol}>
            <div className={styles.footerColumn}>
              <h5>Website made to promot your beauty business.</h5>
              {/* Add your website details and credits here */}
              <p>©Rotem {new Date().getFullYear()} Bbeauty</p>
            </div>
          </div>
          <div className={styles.footerCol}>
            <div className={styles.footerColumn}>
              <Link to={"about"}>
                <h5>
                  <BsFillFunnelFill />
                  About
                </h5>
              </Link>
              {/* Add your about content here */}
            </div>
          </div>
          {user?.isBusiness && (
            <div className={styles.footerCol}>
              <div className={styles.footerColumn}>
                <Link to={"my-cards"}>
                  <h5>
                    <BsCardHeading />
                    My Cards
                  </h5>
                </Link>
                {/* Add your my cards content here */}
              </div>
            </div>
          )}
          {user && (
            <div className={styles.footerCol}>
              <div className={styles.footerColumn}>
                <Link to={"favorites"}>
                  <h5>
                    <BsFillHeartFill /> Favorites
                  </h5>
                </Link>
                {/* Add your favorites content here */}
              </div>
            </div>
          )}
          <div className={styles.footerCol}>
            {user && (
              <Button className={styles.logoutInButton} onClick={onLogoutClick}>
                Log Out
              </Button>
            )}
          </div>
        </div>
      </div>
    </footer>
    // <footer className={styles.footer}>
    //   <Container>
    //     <Row>
    //       <Col lg={3} md={6} sm={12}>
    //         <div className={styles.footerColumn}>
    //           <h5>Website made to promot your beauty business.</h5>
    //           {/* Add your website details and credits here */}
    //           <p>©Rotem {new Date().getFullYear()} Bbeauty</p>
    //         </div>
    //       </Col>
    //       <Col lg={2} md={6} sm={6}>
    //         <div className={styles.footerColumn}>
    //           <Link to={"about"}>
    //             <h5>
    //               <BsFillFunnelFill />
    //               About
    //             </h5>
    //           </Link>
    //           {/* Add your about content here */}
    //         </div>
    //       </Col>
    //       {user?.isBusiness && (
    //
    //           <div className={styles.footerColumn}>
    //             <Link to={"my-cards"}>
    //               <h5>
    //                 <BsCardHeading />
    //                 My Cards
    //               </h5>
    //             </Link>
    //             {/* Add your my cards content here */}
    //           </div>
    //
    //       )}
    //       {user && (
    //
    //           <div className={styles.footerColumn}>
    //             <Link to={"favorites"}>
    //               <h5>
    //                 <BsFillHeartFill /> Favorites
    //               </h5>
    //             </Link>
    //             {/* Add your favorites content here */}
    //           </div>
    //
    //       )}

    //       {user && (
    //         <Col lg={3} md={6} sm={6}>
    //           <Button className={styles.logoutInButton} onClick={onLogoutClick}>
    //             Log Out
    //           </Button>
    //         </Col>
    //       )}
    //     </Row>
    //   </Container>
    // </footer>
  );
};

export default Footer;
