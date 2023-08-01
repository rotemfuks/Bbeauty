import { FunctionComponent } from "react";
import styles from "./Footer.module.scss";
import {
  BsFillFunnelFill,
  BsFillHeartFill,
  BsCardHeading,
} from "react-icons/bs";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row>
          <Col lg={3} md={6} sm={12}>
            <div className={styles.footerColumn}>
              <h5>Website made to promot your beauty business.</h5>
              {/* Add your website details and credits here */}
              <p>©Rotem {new Date().getFullYear()} Bbeauty</p>
            </div>
          </Col>
          <Col lg={2} md={6} sm={6}>
            <div className={styles.footerColumn}>
              <Link to={"about"}>
                <h5>
                  <BsFillFunnelFill />
                  About
                </h5>
              </Link>
              {/* Add your about content here */}
            </div>
          </Col>
          <Col lg={2} md={6} sm={6}>
            <div className={styles.footerColumn}>
              <Link to={"my-cards"}>
                <h5>
                  <BsCardHeading />
                  My Cards
                </h5>
              </Link>
              {/* Add your my cards content here */}
            </div>
          </Col>
          <Col lg={2} md={6} sm={6}>
            <div className={styles.footerColumn}>
              <Link to={"favorites"}>
                <h5>
                  <BsFillHeartFill /> Favorites
                </h5>
              </Link>
              {/* Add your favorites content here */}
            </div>
          </Col>
          <Col lg={3} md={6} sm={6}>
            <Button className={styles.logoutInButton}>Register</Button>
            <Button className={styles.logoutInButton}>Log In</Button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
