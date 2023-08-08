import React, { useContext, useEffect, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
import * as yup from "yup";
import styles from "./BusinessCardForm.module.scss";
import { addCard, editCard, getCardDetails } from "../services/cardService";
import { successMsg } from "../services/feedbacksService";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";

interface NewCardFormProps {}

interface NewCardValues {
  image: string;
  alt: string;
  name: string;
  description: string;
  longDescription: string;
  email: string;
  phone: string;
  address: string;
  state: string;
  zipCode: string;
}

const BusinessCardForm: React.FC<NewCardFormProps> = () => {
  const [cardId, setCardId] = useState<number | null>(null);
  const { user } = useContext(LoginContext);

  const navigate = useNavigate();

  const initialValues: NewCardValues = {
    image: "",
    alt: "",
    name: "",
    description: "",
    longDescription: "",
    email: "",
    phone: "",
    address: "",
    state: "",
    zipCode: "",
  };

  const validationSchema = yup.object({
    image: yup.string().required().min(2),
    alt: yup.string().required().min(3),
    name: yup.string().required().min(4),
    description: yup
      .string()
      .required()
      .min(60, "Must be longer than 60 lettes")
      .max(88, "Must be shorter than 88 lettes"),
    longDescription: yup
      .string()
      .required()
      .min(250, "Must be longer than 250 lettes")
      .max(320, "Must be shorter than 320 letters"),
    email: yup.string().required().email(),
    phone: yup.number().required().min(10),
    address: yup.string().required().min(7),
    state: yup.string().required(),
    zipCode: yup.number().required(),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit(values) {
      if (cardId) {
        editCard(cardId, values);
      } else if (user) {
        addCard({
          ...values,
          userId: user.id,
        }).then(() => {
          successMsg(`${values.name} was added`);
        });
      }

      navigate("/home");
    },
  });

  useEffect(() => {
    const url = new URL(window.location.href);
    const queryParams = new URLSearchParams(url.search);
    const cardIdParam = queryParams.get("cardId");

    if (cardIdParam) {
      setCardId(Number(cardIdParam));
      getCardDetails(Number(cardIdParam)).then((res) => {
        formik.setValues(res.data);
      });
    }
  }, []);

  return (
    <Container>
      <h1 className={styles.title}> Add Business Card</h1>

      <Row className="justify-content-center">
        <Col md={8}>
          <Form onSubmit={formik.handleSubmit} className={styles.cardForm}>
            <Form.Group controlId="name">
              <Form.Label>Business name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter business name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={Boolean(formik.touched.name && formik.errors.name)}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.name}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="image">
              <Form.Label>Image url:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image url"
                name="image"
                value={formik.values.image}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={Boolean(formik.touched.image && formik.errors.image)}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.image}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="alt">
              <Form.Label>Image alt:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image alt"
                name="alt"
                value={formik.values.alt}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={Boolean(formik.touched.alt && formik.errors.alt)}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.image}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Short business description:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter business description"
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={Boolean(
                  formik.touched.description && formik.errors.description
                )}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.description}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="longDescription">
              <Form.Label>Long business description:</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Enter long business description"
                name="longDescription"
                value={formik.values.longDescription}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={Boolean(
                  formik.touched.longDescription &&
                    formik.errors.longDescription
                )}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.longDescription}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email address:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email address"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={!!(formik.touched.email && formik.errors.email)}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="phone">
              <Form.Label>Phone number:</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter phone number"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={!!(formik.touched.phone && formik.errors.phone)}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.phone}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="address">
              <Form.Label>Business address:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter business address"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={!!(formik.touched.address && formik.errors.address)}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.address}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="state">
              <Form.Label>Country:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter business country"
                name="state"
                value={formik.values.state}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={!!(formik.touched.state && formik.errors.state)}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.state}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="zipCode">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter zip code"
                name="zipCode"
                value={formik.values.zipCode}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={!!(formik.touched.zipCode && formik.errors.zipCode)}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.zipCode}
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export { BusinessCardForm };
